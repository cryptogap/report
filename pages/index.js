import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></Script>
        <Script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
        <Script src="https://cdn.executium.com/media/dist/realtime-cryptocurrency-markets/min.js"></Script>
        <Script src="../scripts/scripts.js"></Script>
      </Head>
      <Header />
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <div className="bids-bitfinex-btcusd-price">&hellip;</div>
      <div className="bids-bitfinex-btcusd-qty">&hellip;</div>
      <div className="bids-bitfinex-btcusd-ago ago">&hellip;</div>
    </>
  );
}
