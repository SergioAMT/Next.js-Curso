import Link from 'next/link';

export const HeaderComponent = () => (
    <header>
        <nav>
            <Link href='/' legacyBehavior><a >Home</a></Link>
            <Link href='/events' legacyBehavior><a >Events</a></Link>
            <Link href='/about-us' legacyBehavior><a >About Us</a></Link>
        </nav>
    </header>
)