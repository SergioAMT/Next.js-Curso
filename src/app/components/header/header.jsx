import Image from 'next/image';
import Link from 'next/link';

export const HeaderComponent = () => (
    <header>
    <div>
        <Image src={'/images/logo.jpg'} width={50} height={50} />
        <nav>
            <Link href='/' legacyBehavior><a >Home</a></Link>
            <Link href='/events' legacyBehavior><a >Events</a></Link>
            <Link href='/about-us' legacyBehavior><a >About Us</a></Link>
        </nav>
    </div>
       
    </header>
)