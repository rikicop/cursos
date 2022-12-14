import React from "react";
import logo_text from "../../assets/Recurso 7@4x.png";
import Image from "next/image";

// icons 
import { FaFacebook, FaInstagram } from "react-icons/fa";

// styled components
import { LowerFooter, Section, ImgContainer, BrandContainer, ContactContainer, Title } from "./FooterElements";

export default function Footer() {
  

  return (
   <>
    <Section id ="footer">
      <BrandContainer>
        <ImgContainer>
          <Image src={logo_text} className="img_logo" alt="Footer Logo" height={50} width={200} />
        </ImgContainer>

        <ul>
          <li><FaFacebook/></li>
          <li><FaInstagram/></li>
        </ul>

      </BrandContainer>  

      {/* <div className="about container">
        <div className="title"><h3>About us</h3></div>
        <p>
          
        </p>
      </div> */}

      <ContactContainer>

        <Title>
          <h2>Contáctanos</h2>
        </Title>

        <p>+57 320 957 3682</p>
        <p>rikotalora@gmail.com</p>

      </ContactContainer>

    </Section>


    <LowerFooter>
      <h2>© 2020 Dukleen.  {/* <span>Educación en Línea</span> */}</h2>
    </LowerFooter>
   </>
  );
}

