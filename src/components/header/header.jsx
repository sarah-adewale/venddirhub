
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
        <nav>
          <ul>
            <li>
              <Link href="/" passHref>Home</Link>
            </li>
            <li><Link href="/about" passHref>About</Link></li>
          </ul>
        </nav>
      </header> 
  )
}
