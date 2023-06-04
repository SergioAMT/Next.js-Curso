import Image from 'next/image';
import Link from 'next/link';

export const HeaderComponent = () => (
    <header>
        <div className='topNav'>
            <Image alt='logo' src={'/images/logo.jpg'} width={50} height={50} />
            <nav>
                <ul>
                    <li>
                        <Link href='/' legacyBehavior><a >Home</a></Link>
                    </li>
                    <li>
                        <Link href='/events' legacyBehavior><a >Events</a></Link>
                    </li>
                    <li>
                        <Link href='/about-us' legacyBehavior><a >About Us</a></Link>
                    </li>
                </ul>
            </nav>
        </div>
        <h1>Eventos en Europa</h1>
    </header>
)