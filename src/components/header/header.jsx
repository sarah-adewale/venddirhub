
import Link from 'next/link'
import { UserCircle } from "@phosphor-icons/react";
import { ShoppingCartSimple } from '@phosphor-icons/react'
import styles from '@/styles/Home.module.css'


export const Header = () => {
  return (
    <header className={styles.header}>
        <nav>
          <ul className='flex'>
            <li className={styles.theIcon}>
               <div className='flex'>
                    <Link href="/" passHref>
                        <UserCircle size={32} weight="fill" color="#575757" />
                    </Link>
                </div> 
              
            </li>
            <li><Link href="/about" passHref>
                   <ShoppingCartSimple size={32} color="#575757"/>
                </Link>
            </li>
          </ul>
        </nav>
      </header> 
  )
}
