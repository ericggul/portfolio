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
const pageUrl = "https://portfolio-jyc.org/publications/sota-dis-2026";
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
  sameAs: [doiUrl, acmUrl, sotaUrl, xdLabUrl, "https://openalex.org/W7164485832"],
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
      <div className={styles.wrap}>
        <Link className={styles.backLink} href="/works">
          &#8592; Back to works
        </Link>

        <header className={styles.hero}>
          <div>
            <p className={styles.label}>ACM DIS 2026 publication</p>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.authors}>{displayAuthors}</p>
          </div>

          <aside className={styles.summaryCard} aria-label="Publication summary">
            <dl>
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
            <div className={styles.actions}>
              <a className={styles.action} href={doiUrl} target="_blank" rel="noopener noreferrer">
                DOI
              </a>
              <a className={styles.action} href={acmUrl} target="_blank" rel="noopener noreferrer">
                ACM DL
              </a>
              <a className={styles.action} href={acmPdfUrl} target="_blank" rel="noopener noreferrer">
                ACM PDF
              </a>
              <a className={styles.action} href={sotaUrl} target="_blank" rel="noopener noreferrer">
                SoTA site
              </a>
              <a className={styles.action} href={xdLabUrl} target="_blank" rel="noopener noreferrer">
                XD Lab
              </a>
            </div>
          </aside>
        </header>

        <section className={styles.section} aria-labelledby="abstract">
          <h2 id="abstract">Abstract</h2>
          <p>{abstract}</p>
        </section>

        <section className={styles.section} aria-labelledby="visual-record">
          <h2 id="visual-record">Visual record</h2>
          <div>
            <div className={styles.imageGrid}>
              <figure>
                <img src="/assets/personal/2024/sota/1.webp" alt="SoTA exhibition installation view" />
              </figure>
              <figure>
                <img src="/assets/personal/2024/sota/5.webp" alt="Audience interaction with the SoTA installation" />
              </figure>
              <figure>
                <img src="/assets/personal/2024/sota/10.webp" alt="Neural network architecture visualisation from SoTA" />
              </figure>
            </div>
            <p className={styles.caption}>
              SoTA is presented here with project imagery from the public exhibition record and linked to both the official project site and XD Lab for additional crawlable discovery paths.
            </p>
          </div>
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
            <div className={styles.metadataGrid} aria-label="Machine-readable publication facts">
              <div className={styles.metadataItem}>
                <strong>Publisher</strong>
                <span>ACM</span>
              </div>
              <div className={styles.metadataItem}>
                <strong>Crossref DOI</strong>
                <a href={doiUrl} target="_blank" rel="noopener noreferrer">
                  {doiUrl}
                </a>
              </div>
              <div className={styles.metadataItem}>
                <strong>ACM Digital Library</strong>
                <a href={acmUrl} target="_blank" rel="noopener noreferrer">
                  {acmUrl}
                </a>
              </div>
              <div className={styles.metadataItem}>
                <strong>Project</strong>
                <a href={sotaUrl} target="_blank" rel="noopener noreferrer">
                  {sotaUrl}
                </a>
              </div>
              <div className={styles.metadataItem}>
                <strong>Lab</strong>
                <a href={xdLabUrl} target="_blank" rel="noopener noreferrer">
                  {xdLabUrl}
                </a>
              </div>
              <div className={styles.metadataItem}>
                <strong>License</strong>
                <a href="https://creativecommons.org/licenses/by/4.0/legalcode" target="_blank" rel="noopener noreferrer">
                  Creative Commons Attribution 4.0
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="indexing-note">
          <h2 id="indexing-note">Indexing note</h2>
          <p className={styles.notice}>
            This author-controlled page provides clean, crawlable bibliographic metadata for Google Search and Google Scholar while ACM DL indexing catches up after DOI deposit.
          </p>
        </section>
      </div>
    </main>
  );
}
