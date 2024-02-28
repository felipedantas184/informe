import Head from "next/head"

import { InformesData } from "@/data/InformesData"
import PDFViewer from "@/components/PDF"

export const getStaticPaths = async () => {
  const paths = InformesData.map(item => {
    return {
      params: { slug: item.cpf }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }: any) => {

  return {
    props: { cpf: params.slug },
    revalidate: 1
  }
}

export default function PDFPage({ cpf }: any) {
  return (
    <>
      <Head>
        <title>Curso Matemática Ativa | RD Monitoria</title>
        <meta name="description" content="Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content="Curso Matemática Ativa | RD Monitoria" />
        <meta property="og:type" content="school" />
        <meta property="og:description" content="Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!" />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:site_name" content="RD Monitoria" />

        <meta property="twitter:title" content="Curso Matemática Ativa | RD Monitoria" />
        <meta property="twitter:description" content="Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!" />
        <meta property="twitter:image" content="/apple-touch-icon.png" />
      </Head>
      <PDFViewer cpf={cpf} />
    </>
  );
}