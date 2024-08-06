import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="navigation">
                <li className="current">
                    <Link href="/">Home </Link>
                </li>
                <li>
                    <Link href="about">About Data</Link>
                </li>
                <li>
                    <Link href="retrain">PreProcess Data</Link>
                </li>
                <li>
                    <Link href="rebuild-model">Re-Build Model</Link>
                </li>
                <li>
                    <Link href="predict">Predict</Link>
                </li>
            </ul>
        </>
    )
}
