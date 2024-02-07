import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
// @ts-ignore
import QrCode from 'react-qrcode-svg';


const Home: NextPage = () => {
  const [value, setValue] = useState("test");
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(256);

  return (
    <div className={styles.container}>
      <Head>
        <title>QR GENERATOR</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <br />
      <br />
      <input
        type="text"
        onChange={(e: any) => setValue(e.target.value)}
        placeholder="Value of Qr-code"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => setBack(e.target.value)}
        placeholder="Background color"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => setFore(e.target.value)}
        placeholder="Foreground color"
      />
      <br />
      <br />
      <input
        type="number"
        onChange={(e: any) => setSize(parseInt(e.target.value ===
          '' ? 0 : e.target.value, 10))}
        placeholder="Size of Qr-code"
      />
      <br />
      <br />
      <br />
      <QrCode
        data={value}
        height={size}
        width={size}
        fgColor={fore}
        bgColor={back}
      />

    </div>


  )
}

export default Home
