import { useEffect, useState } from 'react';
import { profile } from '../data/content.js';
import SectionHead from './SectionHead.jsx';

const langColors = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#4b8bbe',
  HTML: '#e34c26',
  CSS: '#8a5cff',
  'C#': '#9b4f96',
  Java: '#e76f00',
  Shell: '#89e051',
  YAML: '#cb171e',
};

export default function Constellation() {
  const [state, setState] = useState({ status: 'loading', repos: [] });

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${profile.github}/repos?sort=updated&per_page=30`)
      .then((r) => {
        if (!r.ok) throw new Error(r.status);
        return r.json();
      })
      .then((data) => {
        if (cancelled) return;
        const repos = data.filter((r) => !r.fork && !r.archived).slice(0, 9);
        setState({ status: 'ready', repos });
      })
      .catch(() => !cancelled && setState({ status: 'error', repos: [] }));
    return () => {
      cancelled = true;
    };
  }, []);

  const profileUrl = `https://github.com/${profile.github}`;

  return (
    <section id="constellation" className="section">
      <SectionHead index="03" kicker="Constellation" title="Live from GitHub">
        Public repositories, pulled straight from my GitHub account.
      </SectionHead>

      {state.status === 'loading' && (
        <div className="repos">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="repo repo--skeleton" />
          ))}
        </div>
      )}

      {state.status === 'error' && (
        <p className="repos__msg reveal is-visible">
          The signal from GitHub didn’t come through just now.{' '}
          <a href={profileUrl} target="_blank" rel="noreferrer">Visit my GitHub directly ↗</a>
        </p>
      )}

      {state.status === 'ready' && state.repos.length === 0 && (
        <p className="repos__msg">
          New stars are forming — public repos will appear here soon.{' '}
          <a href={profileUrl} target="_blank" rel="noreferrer">GitHub profile ↗</a>
        </p>
      )}

      {state.status === 'ready' && state.repos.length > 0 && (
        <div className="repos">
          {state.repos.map((r) => (
            <a key={r.id} className="repo" href={r.html_url} target="_blank" rel="noreferrer">
              <span className="repo__star" aria-hidden="true">✦</span>
              <h3>{r.name.replace(/[-_]/g, ' ')}</h3>
              <p>{r.description || 'No description yet.'}</p>
              <div className="repo__meta">
                {r.language && (
                  <span>
                    <i style={{ background: langColors[r.language] || '#9aa0c7' }} /> {r.language}
                  </span>
                )}
                <span>★ {r.stargazers_count}</span>
                <span>Updated {new Date(r.pushed_at).toLocaleDateString('en-AU', { month: 'short', year: 'numeric' })}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
