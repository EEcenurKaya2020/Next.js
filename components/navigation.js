import Link from 'next/link'

export default function Navigation(){
    return <nav> 
    <Link href="/">
    <a>Ana Sayfa </a>
    </Link>

    <Link href="/about">
    <a>Hakkımda</a>
    </Link>
    </nav>
}