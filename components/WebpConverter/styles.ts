import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  font-family: sans-serif;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

export const Dropzone = styled.div`
  width: 100%;
  max-width: 600px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
  margin-bottom: 2rem;
  transition: border-color 0.3s, background-color 0.3s;

  &:hover {
    border-color: #0070f3;
    background-color: #fafafa;
  }

  p {
    margin: 0;
    font-size: 1.2rem;
    color: #666;
  }
`;

export const FileList = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
  overflow-y: auto;
  flex-grow: 1;
  padding: 0 1rem;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const FileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .name {
    font-weight: bold;
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .size {
    font-size: 0.9rem;
    color: #666;
  }

  .status {
    font-style: italic;
    color: #999;
  }
`;

export const DownloadButton = styled.a`
  padding: 0.5rem 1rem;
  background-color: #0070f3;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }

  &.disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const DownloadAllButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
