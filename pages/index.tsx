import Head from "next/head";
import Layout from "@/layout";
import Home from "@/components/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ADUFPI | Informe de Pagamentos UNIMED 2024</title>
        <meta name="description" content="Acesse o seu informe de pagamentos referentes à UNIMED no ano de 2024." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="ADUFPI | Informe de Pagamentos UNIMED 2024"/>
        <meta property="og:description" content="Acesse o seu informe de pagamentos referentes à UNIMED no ano de 2024."/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="ADUFPI | Informe de Pagamentos UNIMED 2024"/>

        <meta property="twitter:title" content="ADUFPI | Informe de Pagamentos UNIMED 2024"/>
        <meta property="twitter:description" content="Acesse o seu informe de pagamentos referentes à UNIMED no ano de 2024."/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
