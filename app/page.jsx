import Link from "next/link";
import sites from "../data/sites.json";

const STATUS_CLASS = {
  Building: "badge building",
  Staging: "badge staging",
  Live: "badge live",
  Paused: "badge paused",
};

function SiteCard({ site }) {
  const badgeClass = STATUS_CLASS[site.status] || "badge building";
  return (
    <article className="card">
      <div className="card-head">
        <h2>
          <Link href={`/site/${site.slug}`}>{site.name}</Link>
        </h2>
        <span className={badgeClass}>{site.status}</span>
      </div>
      <p className="desc">{site.description}</p>
      <p className="slug">{site.slug}</p>
      <div className="links">
        <Link href={`/site/${site.slug}`}>İncele →</Link>
        {site.previewUrl ? (
          <a href={site.previewUrl} target="_blank" rel="noreferrer">
            Yeni sekme ↗
          </a>
        ) : (
          <span className="muted">no preview yet</span>
        )}
        {site.repoUrl ? (
          <a href={site.repoUrl} target="_blank" rel="noreferrer">
            Repo ↗
          </a>
        ) : (
          <span className="muted">no repo yet</span>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header>
        <h1>MODD Sites</h1>
        <p className="count">
          {sites.length} {sites.length === 1 ? "site" : "sites"}
        </p>
      </header>
      {sites.length === 0 ? (
        <p className="empty">No sites yet — the first one will show up here.</p>
      ) : (
        <div className="grid">
          {sites.map((site) => (
            <SiteCard key={site.slug} site={site} />
          ))}
        </div>
      )}
    </main>
  );
}
