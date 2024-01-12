import React from 'react'
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpeg";
import avatarImage2 from "../assets/avatarImage2.jpeg";
import avatarImage3 from "../assets/avatarImage3.jpeg";


export default function Testimonials() {
  return (
   <Section>
    <div className="title">
    <h2>観光客の声</h2>
    </div>
    <div className="testimonials">
    <div className="testimonial">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Dolorum quam dolore placeat dignissimos pariatur blanditiis fuga porro eligendi at nisi.</p>
    <div className="info">
    <img src={avatarImage} alt="" />
    <div className="details">
    <h4>Kishan Sheth</h4>
    <span>CEO -- Shashaan Web Solution</span>
    </div>
    </div>
    </div>
    <div className="testimonial">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Dolorum quam dolore placeat dignissimos pariatur blanditiis fuga porro eligendi at nisi.</p>
    <div className="info">
    <img src={avatarImage2} alt="" />
    <div className="details">
    <h4>Emi</h4>
    <span>CEO -- Emi Web Solution</span>
    </div>
    </div>
    </div>
    <div className="testimonial">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Dolorum quam dolore placeat dignissimos pariatur blanditiis fuga porro eligendi at nisi.</p>
    <div className="info">
    <img src={avatarImage3} alt="" />
    <div className="details">
    <h4>Lisa</h4>
    <span>CEO -- Lisa Web Solution</span>
    </div>
    </div>
    </div>
    </div>
   </Section>
  )
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
  .testimonial {
    background-color: aliceblue;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    transition: 0ms 3s ease-in-out;
    &:hover {
     transform: translateX(0.4rem) translateY(-1rem);
     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  .info {
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top: 1rem;
     gap: 1rem;
   img {
     height: 3rem;
     border-radius: 3rem;
   }
   .details {
    span {
      font-size: 0.9rem;
    }
   }
  }
  }
  }
`;

