import Link from "next/link"
 
export default function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>page not found. <Link href="/">return home?</Link></p>
    </div>
  )
}