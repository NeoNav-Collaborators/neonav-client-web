import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>[ N E O N A V ]</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Build goes here
          </p>
        </div>
      </main>
    </>
  )
}
