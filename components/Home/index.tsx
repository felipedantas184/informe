import Image from "next/image";
import { Available, Button, Form, Heading, ImageWrapper, Input, InputGroup, Label, LogoWrapper, NotAvailable, PDFViewer, Section, Span, Subtitle, Title, Wrapper } from "./styles";
import { useState } from "react";
import { ExistingList, InformesData } from "@/data/InformesData";

const Home = () => {
  const [cpf, setCpf] = useState<any>()
  const [cpfUrl, setCpfUrl] = useState<any>()
  const [cpfExists, setCpfExists] = useState<Boolean>(false)
  const [waiting, setWaiting] = useState<Boolean>(true)

  const handleSubmitCpf = async (e: any) => {
    e.preventDefault()
    if (ExistingList.includes(cpfUrl)) {
      setCpfExists(true)
      setWaiting(false)
    } else {
      setWaiting(false)
      setCpfExists(false)
    }
  }

  return (
    <Section>
      <Wrapper>
        <Form onSubmit={handleSubmitCpf} >
          <LogoWrapper>
            <Image src={'/images/black_logo.png'} alt="ADUFPI Logo" fill />
          </LogoWrapper>
          <Heading>
            <Title>Informe de Pagamentos UNIMED 2023</Title>
            <Subtitle>Digite seu CPF para ter acesso ao seu informe de pagamentos</Subtitle>  
          </Heading>
          {(waiting || !cpfExists) ? (
            <>
              <InputGroup>
                <Label>CPF</Label>
                <Input type="number" placeholder="Digite seu CPF (apenas números)" required minLength={11}
                  onChange={(e) => {setCpf(e.target.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')), setCpfUrl(e.target.value)}} value={cpf} />
              </InputGroup>
              {(!waiting && !cpfExists) ? (
                <NotAvailable>Não foi possível localizar o informe</NotAvailable>
              ) : (
                <></>
              )}
              <Button type="submit">Gerar Informe de Rendimentos</Button>
            </>
          ) : (
            <Available>O seu informe está disponível ao lado!</Available>
          )}
          <Span>Desenvolvido por <a href="https://tecdata.com.br/" target="_blank">TECDATA SoftHouse</a></Span>
        </Form>
        <PDFViewer>
          {(waiting) ? (
            <ImageWrapper>
              <Image src={'/icons/waiting.svg'} alt="Esperando" fill />
            </ImageWrapper>
          ) : (
            (!cpfExists) ? (
              <>
                <ImageWrapper>
                  <Image src={'/icons/error.svg'} alt="Esperando" fill />
                </ImageWrapper>
                <Subtitle>CPF não encontrado</Subtitle>
              </>
            ) : (
              <iframe src={`/informes/${cpfUrl}.pdf`} width={'100%'} height={'100%'} />
            )
          )}
        </PDFViewer>
      </Wrapper>
    </Section>
  );
}

export default Home;