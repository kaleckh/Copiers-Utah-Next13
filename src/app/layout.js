
import './globals.css'
import { Inter } from 'next/font/google'
import {Redirect} from './redirect'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Copiers Utah',
//   description: 'Local Copier Company',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Redirect/> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
