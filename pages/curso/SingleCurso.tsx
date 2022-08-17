import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
//Context API


import {
  Container,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Button,
  Social,
} from "./SingleCElements";
import { useGlobalContext } from "./slugContext";


interface CursoProps {
  primary?: boolean;
  lightBg?: boolean;
  topLine?: string;
  lightTopLine?: boolean;
  lightText?: boolean;
  lightTextDesc?: boolean;
  headline?: string;
  description?: string;
  buttonLabel?: string;
  img?: any;
  alt?: string;
  imgStart?: any;
  mobileImgStart?: boolean;
  start?: any;
  startCheckout?: any;
}

function SingleCurso({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  mobileImgStart,
  start,
}: CursoProps) {
 
  const { checkout , setCheckout } = useGlobalContext();
  console.log("CHECKOUT in SingleCurso: ", checkout);
  

  return (
    <>
      <InfoSec lightBg={lightBg}>        
        <Container>
          <InfoRow imgStart={imgStart} mobileImgStart={mobileImgStart} >
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Button
                  big
                  fontBig
                  primary={primary}
                  onClick={() => setCheckout(true)}
                >
                  {buttonLabel}
                </Button>
                <Social>
                  <ul>
                    <Link href="https://www.facebook.com/">
                      <li>
                        <FaFacebook style={{ marginRight: "10px" }} />
                      </li>
                    </Link>
                    <Link href="https://www.twitter.com/">
                      <li>
                        <FaTwitter style={{ marginRight: "10px" }} />
                      </li>
                    </Link>
                    <Link href="https://www.instagram.com/">
                      <li>
                        <FaInstagram style={{ marginRight: "10px" }} />
                      </li>
                    </Link>
                  </ul>
                </Social>               
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>   
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default SingleCurso;