import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Metadata from "next"

export const metadata: Metadata = {
  title: "nezu.world",
}

export default function Home() {
  return (
    <>
      <h1>{metadata.title}</h1>
      <p>
        Deserunt magna velit veniam ut voluptate incididunt sit exercitation et culpa qui. Labore duis exercitation mollit in. Adipisicing elit consectetur ut aliqua et magna anim qui ex adipisicing irure aute eiusmod fugiat. Tempor veniam consectetur labore qui officia labore officia veniam in amet aute dolor. Ad id consequat amet voluptate mollit ex eu commodo in. Laboris consequat in culpa mollit elit nisi nostrud nulla minim elit ipsum ea proident exercitation.
      </p>

      <p>
        Pariatur pariatur cillum nisi commodo in quis ea cupidatat duis aliqua commodo deserunt. Id sit qui occaecat consequat consectetur dolor non occaecat proident excepteur nisi. Aliqua voluptate occaecat ad eu ullamco. Esse ex sunt esse irure sit.
      </p>

      <p>
        Lorem enim veniam amet fugiat culpa eiusmod consequat adipisicing. Cupidatat commodo fugiat consectetur magna eiusmod officia occaecat deserunt voluptate mollit deserunt consequat. Culpa quis eu irure eu enim nostrud aliquip commodo aute Lorem exercitation non consectetur. Nisi id et culpa sunt excepteur quis ea. Nisi veniam dolore mollit anim.
      </p>
    </>
  )
}