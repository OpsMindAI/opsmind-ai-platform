import './globals.css'

export const metadata = {
    title: 'OpsMind AI Platform',
    description: 'AI-powered project management platform with natural language planning, CPM scheduling, and risk analysis.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
          <html lang="en">
                <body>{children}</body>body>
              </html>html>
        )
}</html>
