import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Hello World</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore neque numquam aliquam corrupti blanditiis eius, animi maxime, ipsum non possimus eveniet fugit explicabo id sapiente.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore neque numquam aliquam corrupti blanditiis eius, animi maxime, ipsum non possimus eveniet fugit explicabo id sapiente.</p>
        <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
      </div>
    </>
  )
}
