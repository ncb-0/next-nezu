import "./globals.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "nezu.world",
    template: "nezu.world | %s",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
