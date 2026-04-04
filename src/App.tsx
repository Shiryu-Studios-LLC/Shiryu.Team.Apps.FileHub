import { useEffect, type ReactNode } from 'react'
import { composeShiryuClassNames, getShiryuAppShellClassNames } from '@shiryustudios/team-app-sdk'
import { FileArchive, FolderOpen, Upload } from 'lucide-react'
import settings from '../settings.json'

const shell = getShiryuAppShellClassNames('compact')

function postReady() {
  if (typeof window === 'undefined' || window.parent === window) return
  const parentOrigin = document.referrer ? new URL(document.referrer).origin : '*'
  window.parent.postMessage({ type: 'shiryu:app-ready', appId: settings.id, route: '/' }, parentOrigin)
}

function StatCard({ title, body, icon }: { title: string; body: string; icon: ReactNode }) {
  return (
    <section
      style={{
        border: '1px solid rgba(148, 163, 184, 0.18)',
        background: 'rgba(15, 23, 42, 0.72)',
        borderRadius: 24,
        padding: '1.25rem',
        color: '#e2e8f0',
        boxShadow: '0 18px 40px rgba(15, 23, 42, 0.24)',
      }}
    >
      {icon}
      <div style={{ marginTop: 12, fontSize: 15, fontWeight: 700 }}>{title}</div>
      <p style={{ marginTop: 10, fontSize: 14, lineHeight: 1.6, color: '#94a3b8' }}>{body}</p>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    document.title = `${settings.name} | Shiryu Team Apps`
    postReady()
  }, [])

  return (
    <div className={composeShiryuClassNames('file-hub-app-shell', shell.root)} data-shiryu-surface-root="true">
      <aside className={composeShiryuClassNames('file-hub-app-sidebar', shell.sidebar)}>
        <div className={composeShiryuClassNames('file-hub-app-sidebar-brand', shell.sidebarBrand)}>
          <div className={composeShiryuClassNames('file-hub-app-sidebar-brand-copy', shell.sidebarBrandCopy)}>
            <div className={composeShiryuClassNames('file-hub-app-sidebar-kicker', shell.sidebarKicker)}>File Hub</div>
            <h1 className={composeShiryuClassNames('file-hub-app-sidebar-title', shell.sidebarTitle)}>Assets</h1>
            <p className={composeShiryuClassNames('file-hub-app-sidebar-description', shell.sidebarDescription)}>
              Shared files, upload queues, and workspace assets.
            </p>
          </div>
        </div>
        <nav className={composeShiryuClassNames('file-hub-app-nav', shell.nav)}>
          <div className={composeShiryuClassNames('file-hub-app-nav-link', shell.navLink, shell.navLinkActive)}>
            <span className={composeShiryuClassNames('file-hub-app-nav-icon', shell.navIcon)}>
              <FolderOpen size={18} />
            </span>
            <span>Library</span>
          </div>
          <div className={composeShiryuClassNames('file-hub-app-nav-link', shell.navLink)}>
            <span className={composeShiryuClassNames('file-hub-app-nav-icon', shell.navIcon)}>
              <Upload size={18} />
            </span>
            <span>Uploads</span>
          </div>
          <div className={composeShiryuClassNames('file-hub-app-nav-link', shell.navLink)}>
            <span className={composeShiryuClassNames('file-hub-app-nav-icon', shell.navIcon)}>
              <FileArchive size={18} />
            </span>
            <span>Archive</span>
          </div>
        </nav>
      </aside>
      <main className={composeShiryuClassNames('file-hub-app-main', shell.main, shell.mainScroll, shell.scrollbar)}>
        <div style={{ minHeight: '100%', color: 'inherit' }}>
          <div style={{ margin: '0 auto', maxWidth: 1100, padding: '24px' }}>
            <section
              style={{
                borderRadius: 30,
                padding: '24px',
                border: '1px solid rgba(148, 163, 184, 0.16)',
                background: 'rgba(15, 23, 42, 0.72)',
                backdropFilter: 'blur(18px)',
                boxShadow: '0 24px 60px rgba(15, 23, 42, 0.32)',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  borderRadius: 999,
                  padding: '6px 12px',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(129, 140, 248, 0.28)',
                  background: 'rgba(79, 70, 229, 0.16)',
                  color: '#c7d2fe',
                }}
              >
                File Hub
              </div>
              <h1 style={{ margin: '16px 0 0', fontSize: '2rem', lineHeight: 1.1 }}>{settings.name}</h1>
              <p style={{ marginTop: 14, maxWidth: 720, fontSize: 15, lineHeight: 1.7, color: '#94a3b8' }}>
                Store and route workspace files from the shared Team shell. The app stays lightweight here and the layout
                mirrors the other embedded apps.
              </p>
            </section>

            <div
              style={{
                display: 'grid',
                gap: 16,
                marginTop: 20,
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              }}
            >
              <StatCard
                title="Shared Library"
                body="Review the team’s shared file set from the unified embedded shell."
                icon={<FolderOpen size={18} color="#c4b5fd" />}
              />
              <StatCard
                title="Upload Queue"
                body="Handle new files without leaving the Discord-style workspace frame."
                icon={<Upload size={18} color="#93c5fd" />}
              />
              <StatCard
                title="Archive"
                body="Keep long-lived workspace artifacts grouped and accessible."
                icon={<FileArchive size={18} color="#f9a8d4" />}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
