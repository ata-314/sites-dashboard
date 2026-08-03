import Link from "next/link";
import { notFound } from "next/navigation";
import sites from "../../../data/sites.json";

export function generateStaticParams() {
  return sites.map((site) => ({ slug: site.slug }));
}

export default async function SiteViewer({ params }) {
  const { slug } = await params;
  const site = sites.find((s) => s.slug === slug);
  if (!site) notFound();

  return (
    <div className="viewer">
      <div className="viewer-bar">
        <Link href="/" className="viewer-back">
          ← MODD Sites
        </Link>
        <span className="viewer-name">{site.name}</span>
        {site.previewUrl ? (
          <a
            href={site.previewUrl}
            target="_blank"
            rel="noreferrer"
            className="viewer-open"
          >
            Yeni sekmede aç ↗
          </a>
        ) : (
          <span className="muted">henüz canlı değil</span>
        )}
      </div>
      {site.previewUrl ? (
        <iframe
          src={site.previewUrl}
          title={site.name}
          className="viewer-frame"
        />
      ) : (
        <p className="empty">
          Bu site henüz deploy edilmedi — kart Building durumunda.
        </p>
      )}
    </div>
  );
}
