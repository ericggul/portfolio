import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const title = "SoTA: An Interactive Art Exhibition for Public AI Engagement";
const authors = ["Choi, Jeanyoon", "Hwang, Intae", "Park, SeJoon", "Cho, Hyungjun", "Bae, Heejae", "Kang, Yiyun"];
const displayAuthors = "Jeanyoon Choi, Intae Hwang, SeJoon Park, Hyungjun Cho, Heejae Bae, and Yiyun Kang";
const venue = "Proceedings of the 2026 Designing Interactive Systems Conference";
const doi = "10.1145/3800645.3812889";
const doiUrl = `https://doi.org/${doi}`;
const acmUrl = `https://dl.acm.org/doi/${doi}`;
const acmPdfUrl = `https://dl.acm.org/doi/pdf/${doi}`;
const sotaUrl = "https://sota-xdlab.net/";
const xdLabUrl = "https://www.xdlab.net/";
const videoUrl = "https://www.youtube.com/watch?v=WYFolg3Y-rU&t=7s";
const videoEmbedUrl = "https://www.youtube.com/embed/WYFolg3Y-rU?start=7";
const pageUrl = "https://portfolio-jyc.org/publications/sota-dis-2026";
const markdownUrl = "https://portfolio-jyc.org/publications/sota-dis-2026.md";
const abstract =
  "We introduce SoTA, a multi-device interactive artwork on artificial intelligence (AI). It visualises 118 neural network architectures as artistic objects that can be experienced at an immersive scale, allowing audiences to select, explore, and navigate different models interactively. The installation is also characterised by an intentional narrative shift that moves from open-ended exploration to abstract visualisation. We exhibited SoTA in a public art museum and conducted an in-situ study with 33 participants to investigate how aesthetic experiences foster affective and critical reflection, complementing technical explanation in public AI engagement. Our findings reveal how aesthetic environments create emotional conditions that foster deeper inquiry, leading to enhanced understanding, productive ambivalence, and ultimately personal, philosophical, and societal reflection on AI. We conclude by discussing the opportunities of artistic exhibitions for public AI engagement and suggest three concrete design strategies grounded in our evaluation of SoTA.";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `${title} | Jeanyoon Choi`,
  description: abstract,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title,
    description: abstract,
    siteName: "Jeanyoon Choi Portfolio",
    publishedTime: "2026-06-12",
    authors: displayAuthors,
    images: [
      {
        url: "https://portfolio-jyc.org/assets/personal/2024/sota/1.webp",
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: abstract,
    images: ["https://portfolio-jyc.org/assets/personal/2024/sota/1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    citation_title: title,
    citation_author: authors,
    citation_publication_date: "2026/06/12",
    citation_conference_title: venue,
    citation_firstpage: "4156",
    citation_lastpage: "4180",
    citation_doi: doi,
    citation_abstract: abstract,
    citation_pdf_url: acmPdfUrl,
    citation_online_date: "2026/06/12",
    "llm-source": markdownUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: title,
  name: title,
  abstract,
  author: [
    { "@type": "Person", name: "Jeanyoon Choi", identifier: "https://orcid.org/0009-0002-9846-3865" },
    { "@type": "Person", name: "Intae Hwang", identifier: "https://orcid.org/0009-0003-0930-2697" },
    { "@type": "Person", name: "SeJoon Park", identifier: "https://orcid.org/0009-0002-7112-7458" },
    { "@type": "Person", name: "Hyungjun Cho", identifier: "https://orcid.org/0000-0001-9666-8387" },
    { "@type": "Person", name: "Heejae Bae", identifier: "https://orcid.org/0009-0009-7305-8899" },
    { "@type": "Person", name: "Yiyun Kang", identifier: "https://orcid.org/0009-0007-6185-3073" },
  ],
  publisher: {
    "@type": "Organization",
    name: "ACM",
  },
  isPartOf: {
    "@type": "PublicationIssue",
    name: venue,
  },
  datePublished: "2026-06-12",
  pageStart: "4156",
  pageEnd: "4180",
  pagination: "4156-4180",
  doi,
  url: pageUrl,
  sameAs: [doiUrl, acmUrl, markdownUrl, sotaUrl, xdLabUrl, videoUrl, "https://openalex.org/W7164485832"],
  video: {
    "@type": "VideoObject",
    name: "SoTA exhibition video",
    url: videoUrl,
    embedUrl: videoEmbedUrl,
  },
  image: [
    "https://portfolio-jyc.org/assets/personal/2024/sota/1.webp",
    "https://portfolio-jyc.org/assets/personal/2024/sota/5.webp",
    "https://portfolio-jyc.org/assets/personal/2024/sota/10.webp",
  ],
  license: "https://creativecommons.org/licenses/by/4.0/legalcode",
};

export default function SotaPublicationPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className={styles.article}>
        <Link className={styles.backLink} href="/works">
          &#8592; Back to works
        </Link>

        <header>
          <p className={styles.kicker}>ACM DIS 2026 publication</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.authors}>{displayAuthors}</p>

          <dl className={styles.facts}>
            <dt>Venue</dt>
            <dd>{venue}</dd>
            <dt>Pages</dt>
            <dd>4156-4180</dd>
            <dt>Date</dt>
            <dd>
              <time dateTime="2026-06-12">2026-06-12</time>
            </dd>
            <dt>DOI</dt>
            <dd>
              <a href={doiUrl} target="_blank" rel="noopener noreferrer">
                {doi}
              </a>
            </dd>
          </dl>

          <nav className={styles.links} aria-label="Publication links">
            <a className={styles.linkButton} href={doiUrl} target="_blank" rel="noopener noreferrer">
              DOI
            </a>
            <a className={styles.linkButton} href={acmUrl} target="_blank" rel="noopener noreferrer">
              ACM DL
            </a>
            <a className={styles.linkButton} href={acmPdfUrl} target="_blank" rel="noopener noreferrer">
              ACM PDF
            </a>
            <a className={styles.linkButton} href={sotaUrl} target="_blank" rel="noopener noreferrer">
              SoTA site
            </a>
            <a className={styles.linkButton} href={xdLabUrl} target="_blank" rel="noopener noreferrer">
              XD Lab
            </a>
            <a className={styles.linkButton} href={videoUrl} target="_blank" rel="noopener noreferrer">
              Video
            </a>
            <a className={styles.linkButton} href="/publications/sota-dis-2026.md">
              Markdown
            </a>
          </nav>
        </header>

        <section className={styles.section} aria-labelledby="video">
          <h2 id="video">Video</h2>
          <iframe
            className={styles.video}
            src={videoEmbedUrl}
            title="SoTA exhibition video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <p className={styles.note}>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
              Open video on YouTube
            </a>
          </p>
        </section>

        <section className={styles.section} aria-labelledby="citation">
          <h2 id="citation">Citation</h2>
          <div>
            <p className={styles.citation}>
              {displayAuthors}. 2026. {title}. In <em>{venue}</em>, 4156-4180. ACM. DOI:{" "}
              <a href={doiUrl} target="_blank" rel="noopener noreferrer">
                {doi}
              </a>
              .
            </p>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="abstract">
          <h2 id="abstract">Abstract</h2>
          <p>{abstract}</p>
        </section>

        <section className={styles.section} aria-labelledby="machine-readable">
          <h2 id="machine-readable">Machine-readable records</h2>
          <p>
            LLM text record: <a href="/publications/sota-dis-2026.md">{markdownUrl}</a>
            <br />
            Site LLM index: <a href="/llms.txt">https://portfolio-jyc.org/llms.txt</a>
          </p>
        </section>
      </article>
    </main>
  );
}
