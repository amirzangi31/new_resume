import { Link } from '@/i18n/routing'


function Logo() {
    return (
        <Link href={`/`} className="logo">
            <p>Zangi</p>
            <p>Abadi</p>
        </Link>
    )
}

export default Logo