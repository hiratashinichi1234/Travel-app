import React from 'react'
import styled from "styled-components"
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <FooterContainer>
    
    <span>Copyright &copy: 2024 Travel. All rights reserve</span>
    <ul className="links">
        <li>
          <a href="#hero">ホーム</a>
        </li>
        <li>
          <a href="#services">サービス</a>
        </li>
        <li>
          <a href="#recommend">観光地</a>
        </li>
        <li>
          <a href="#testimonials">お客様の声</a>
        </li>
      </ul>
      <ul className='social_links'>
      <li>
     < BsFacebook />
      </li>
      <li>
     <  BsLinkedin />
      </li>
      <li>
     < AiFillInstagram />
      </li>
      </ul>
  
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  padding: 2.5rem;
  border-radius: 0.5rem;
  ul{
    display: flex;
    list-style-type: none;
    gap: 2rem;
  li {
  a {
    text-decoration: none;
    color: black;
    transition: 0.3s ease-in-out;
    &:hover {
      color: #382ce9;
    }
  }
  svg {
    font-size: 1.3rem;
    transition: 0.3s ease-in-out;
    &:hover {
      color: #382ce9;
    }
  }
  }
  }

`;
