import Link from "next/link";

export default function PageList({ pages }) {
  return (
    <ul>
      {pages.map((page) => (
        <li key={page.id}>
          <Link href={`./${page.slug}`}>{page.title}</Link>
        </li>
      ))}
    </ul>
  )
}