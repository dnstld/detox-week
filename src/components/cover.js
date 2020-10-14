import React from "react"
import { Link } from "gatsby-plugin-modal-routing"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faHashtag
} from '@fortawesome/free-solid-svg-icons';

import tw, { styled } from "twin.macro"

const Cover = () => (
  <Background>
    <Header>
      <div className="text-2xl">
        <FontAwesomeIcon icon={faHashtag} />
        vempro
      </div>
      <Title>DETOX WEEK</Title>
      <SubTitle>Gi Toledo</SubTitle>
      <Link
        to="/perguntas-e-respostas/"
        asModal
      >
        <FontAwesomeIcon icon={faComments} className="text-2xl" />
        Dúvidas frequentes
      </Link>
    </Header>
  </Background>
)

const Background = styled.div`
  ${tw`w-full h-screen flex pt-12 md:pt-0 md:items-center`}
`;

const Header = styled.header`
  ${tw`p-8 md:max-w-half`}
`;

const Title = styled.h1`
  ${tw`text-6xl antialiased font-black tracking-widest leading-none`}
`;

const SubTitle = styled.h2`
  ${tw`text-6xl antialiased tracking-widest`}
`;

// const Intro = styled.div`
//   ${tw`w-full max-w-screen-xl m-auto p-4`}
// `;

export default Cover
