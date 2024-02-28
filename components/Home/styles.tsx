import styled from "styled-components";

export const Section = styled.section`
  background-color: #FFFFFF;
  padding: 24px 0;
`
export const Wrapper = styled.div`
  max-width: 1080px;
  margin-left: auto;
	margin-right: auto;
  height: 80vh;
  padding: 8px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const Form = styled.form`
  flex: 1;
  background-color: #F6F6F6;
  padding: 12px;
  border-radius: 12px 0 0 12px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 450px;
    border-radius: 12px 12px 0 0; 
  }
`
export const PDFViewer = styled.div`
  flex: 1;
  background-color: #F6F6F6;
  border-radius:  0 12px 12px 0;
  min-width: 300px;
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 8px;

  > iframe {
    border: none;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 450px;
    border-radius:  0 0 12px 12px;
  }
`
export const LogoWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s ease-in-out;
    }
  }
`
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
export const Title = styled.h2`
  color: #13131A;
  font-size: 18px;
  text-transform: capitalize;
  text-align: center;
`
export const Subtitle = styled.h3`
  color: #3A3A3A;
  font-size: 16px;
  font-weight: 500;
  max-width: 350px;
  text-align: center;
`
export const Span = styled.span`
  color: #3A3A3A;
  font-size: 12px;
  font-weight: 500;
  max-width: 350px;
  text-align: center;
  margin-top: 16px;

  > a {
    color: #EB5757;
  }
`
export const InputGroup = styled.div`
  width: 100%;
  max-width: 350px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`
export const Label = styled.label`
  color: #13131A;
  font-size: 16px;
  align-self: flex-start;
`
export const Input = styled.input`
  background-color: #FFFFFF;
  color: #33333A;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;

  padding: 8px 12px; 
  width: 100%;
  max-width: 350px;
  border: none;
  border-radius: 8px;
  outline: none;
`
export const Button = styled.button`
  background-color: #EB5757;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Poppins';

  border: 0;
  padding: 8px 16px;
  border-radius: 8px;
  
  cursor: pointer;
  transition: 0.5s;
  -webkit-tap-highlight-color: transparent;
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s ease-in-out;
    }
  }
`
export const Available = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 8px;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: 'Poppins';
  font-size: 16px;
  color: green;
  background-color: #FFF;
  text-align: center;
`
export const NotAvailable = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 8px;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: 'Poppins';
  font-size: 16px;
  color: red;
  background-color: #FFF;
  text-align: center;
`