import GlobalStyles from '@/styles/GlobalStyles'
import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html >
      <body >
        <StyledComponentsRegistry>
          <GlobalStyles/>
          {children}
        </StyledComponentsRegistry>
        </body>
    </html>
  )
}
