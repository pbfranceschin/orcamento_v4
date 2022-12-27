import Head from 'next/head';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>App Orçamento da União 2023</title>
        <meta name="description" content="Created by FGV-ECMI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fgv.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <a
            href="/Application"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Abrir o app</h2>
          </a>
          <div>
            <a
              href="https://ecmi.fgv.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Desenvolvimento{' '}
              <Image
                src="/fgv_logo_branco.png"
                // alt="Vercel Logo"
                // className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          {/* <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div> */}
          <div><h1><i>App Orçamento da União 2023</i></h1></div>
        </div>
        

        <div className={styles.grid}>
          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Transparência <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Facilita o rastreio do dinheiro público pela da sociedade civil.
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Resiliência <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Garante alta integridade dos dados através da decentralização.
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Eficiência <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Diminui custos através da desintermediação dos bancos.
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Controle <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Condicionamento dos repasses através de smart contracts
            </p>
          </a>
        </div>
        {/* <div>
        <h2>Transferências</h2>
        </div> */}
      </main>
    </>

  );
}
