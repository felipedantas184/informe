import { FaBars } from "react-icons/fa";
import { Container, LogoWrapper, Wrapper } from "./styles";
import Image from "next/image";

const Navbar = () => {
  return ( 
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Image src={'/images/black_logo.png'} alt="ADUFPI Logo" fill />
        </LogoWrapper>
        <FaBars size={32} color='#13131A' />
      </Wrapper>
    </Container>
   );
}
 
export default Navbar;