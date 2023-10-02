import React from 'react';
import Link from 'next/link'
import styles from '@/app/styles/navbar.module.css'
import Nav from "@/app/component/Nav";

const Header = () => {
    return (
       <header className={styles.main_header}>
           <div className={styles.navbar_brand}>
               <Link href="/">
                    <img src="/logo.png" alt="my logo image" width={150} height={40}/>
               </Link>
           </div>
           <Nav/>
       </header>
    );
};

export default Header;