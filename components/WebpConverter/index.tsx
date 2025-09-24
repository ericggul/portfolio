"use client";

import React, { useState, useRef } from "react";
import JSZip from "jszip";
import * as S from "./styles";

interface ImageFile {
  id: string;
  originalFile: File;
  status: "pending" | "converting" | "converted" | "error";
  webpUrl?: string;
  originalSize: number;
  convertedSize?: number;
  error?: string;
}

const WebpConverter: React.FC = () => {
  const [files, setFiles] = useState<ImageFile[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const convertToWebp = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0);
          canvas.toBlob(
            (blob) => {
              if (blob) {
                resolve(URL.createObjectURL(blob));
              } else {
                reject(new Error("Canvas to Blob conversion failed"));
              }
            },
            "image/webp",
            0.8
          );
        };
        img.onerror = (error) => reject(error);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const processQueue = async (filesToProcess: ImageFile[]) => {
    for (const imageFile of filesToProcess) {
      setFiles((prev) =>
        prev.map((f) =>
          f.id === imageFile.id ? { ...f, status: "converting" } : f
        )
      );
      try {
        const webpUrl = await convertToWebp(imageFile.originalFile);
        const blob = await fetch(webpUrl).then((r) => r.blob());
        setFiles((prev) =>
          prev.map((f) =>
            f.id === imageFile.id
              ? {
                  ...f,
                  status: "converted",
                  webpUrl,
                  convertedSize: blob.size,
                }
              : f
          )
        );
      } catch (error) {
        console.error("Conversion failed:", error);
        setFiles((prev) =>
          prev.map((f) =>
            f.id === imageFile.id
              ? {
                  ...f,
                  status: "error",
                  error:
                    error instanceof Error ? error.message : "Unknown error",
                }
              : f
          )
        );
      }
    }
  };

  const handleFileChange = (selectedFiles: FileList | null) => {
    if (selectedFiles) {
      const newImageFiles: ImageFile[] = Array.from(selectedFiles)
        .filter((file) => file.type.startsWith("image/"))
        .map((file) => ({
          id: `${file.name}-${file.lastModified}`,
          originalFile: file,
          status: "pending",
          originalSize: file.size,
        }));
      setFiles((prev) => [...prev, ...newImageFiles]);
      processQueue(newImageFiles);
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFileChange(e.dataTransfer.files);
  };

  const onSelectFiles = () => {
    inputRef.current?.click();
  };

  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const downloadAll = async () => {
    const zip = new JSZip();
    const convertedFiles = files.filter(
      (file) => file.status === "converted" && file.webpUrl
    );

    for (const file of convertedFiles) {
      try {
        const response = await fetch(file.webpUrl!);
        const blob = await response.blob();
        const fileName = `${
          file.originalFile.name.split(".").slice(0, -1).join(".")
        }.webp`;
        zip.file(fileName, blob);
      } catch (error) {
        console.error("Error fetching blob for zipping:", file.webpUrl, error);
      }
    }

    zip.generateAsync({ type: "blob" }).then((content) => {
      const a = document.createElement("a");
      const url = URL.createObjectURL(content);
      a.href = url;
      a.download = "converted_images.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  };

  const allConverted = files.every(
    (f) => f.status === "converted" || f.status === "error"
  );
  const anyConverted = files.some((f) => f.status === "converted");

  return (
    <S.Container>
      <S.Title>WebP Converter</S.Title>
      <S.Dropzone onDragOver={onDragOver} onDrop={onDrop} onClick={onSelectFiles}>
        <p>Drag & drop images here, or click to select files</p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e.target.files)}
        />
      </S.Dropzone>

      {files.length > 0 && (
        <S.FileList>
          {files.map((file) => (
            <S.FileItem key={file.id}>
              <div className="info">
                <span className="name">{file.originalFile.name}</span>
                <span className="size">
                  {formatBytes(file.originalSize)}
                  {file.convertedSize &&
                    ` -> ${formatBytes(file.convertedSize)}`}
                </span>
                <span className="status">
                  {file.status === "error" ? `Error: ${file.error}` : file.status}
                </span>
              </div>
              <S.DownloadButton
                href={file.webpUrl}
                download={`${
                  file.originalFile.name.split(".").slice(0, -1).join(".")
                }.webp`}
                className={file.status !== "converted" ? "disabled" : ""}
                onClick={(e) => {
                  if (file.status !== "converted") e.preventDefault();
                }}
              >
                Download
              </S.DownloadButton>
            </S.FileItem>
          ))}
        </S.FileList>
      )}
      {files.length > 0 && (
        <S.DownloadAllButton onClick={downloadAll} disabled={!anyConverted || !allConverted}>
          {allConverted ? "Download All as ZIP" : "Converting..."}
        </S.DownloadAllButton>
      )}
    </S.Container>
  );
};

export default WebpConverter;
