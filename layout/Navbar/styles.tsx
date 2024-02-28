import styled from "styled-components";

export const Container = styled.section`
  background-color: rgba(var(--primary-color), 1);
  height: 60px;

  display: flex;
  align-items: center;
`
export const Wrapper = styled.div`
	width: 100%;
  max-width: 1080px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
  
  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
`
export const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 150px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`