import styled from "styled-components";
import { Document, Page } from 'react-pdf'

export const Section = styled.section`
  padding: 32px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`
export const Title = styled.h1`
  color: #13131A;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const Subtitle = styled.h3`
  color: #44444A;
  font-size: 16px;
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`
export const CButton = styled.button`
  background-color: #120530;
  padding: 12px 24px;
  border-radius: 8px;
  color: #FFF;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  outline: none;
  border: 0;
  -webkit-tap-highlight-color: transparent;
`
export const DocWrapper = styled.div`
  border: 2px solid #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

  @media print {
    display: none;
  }
`

export const StyledDoc = styled(Document)`
  
`
export const StyledPage = styled(Page)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const StyledPageMobile = styled(Page)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`