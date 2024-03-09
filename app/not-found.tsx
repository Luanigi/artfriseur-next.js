import Link from "next/link"
import Navbar from "./components/Navbar"

export default function NotFound() {
  return (
    <main className="text-center fadeUp">
        <Navbar />
        <h2 className="text-3xl pt-20">Es gibt ein <b>Problem</b>.</h2>
        <p>Wir konnten die gesuchte Seite nicht finden!</p>
        <p>Gehe zurück zur <Link href="/" className="text-yellow-500">Startseite</Link></p>
    </main>
  )
}
