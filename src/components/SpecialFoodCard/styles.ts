import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 80%;
  height: 47rem;
  display: grid;
  grid-template-rows: 19.1rem repeat(4, auto);
  grid-template-columns: 1fr;
  grid-template-areas:
    "image"
    "header"
    "body"
    "callToAction";
  // justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 1px #eaeaea;
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.border.radius} ${({ theme }) => theme.border.radius} ;
  gap: 1rem;
  font-family: ${({ theme }) => theme.font.family.alt};
  

`;

export const Image = styled.img<HTMLAttributes<HTMLImageElement>>`
  grid-area: image;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.border.radius} ${({ theme }) => theme.border.radius} 0 0;
  font-family: ${({ theme }) => theme.font.family.alt};
`;

export const Header = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.6rem 0 1.6rem;
  // color:red;
  font-size:2rem;
  font-family: ${({ theme }) => theme.font.family.alt};

  .orderBtn {
    color: ${({ theme }) => theme.colors.white};
    // padding:12rem;
    font-family: ${({ theme }) => theme.font.family.alt};
  };
`;

export const Body = styled.p<HTMLAttributes<HTMLParagraphElement>>`
  grid-area: body;
  height: 12rem;
  padding: 0 1.6rem;
  color: ${({ theme }) => theme.colors.black};
  text-overflow: ellipsis;
  font-family: ${({ theme }) => theme.font.family.alt};
`;

export const CallToAction = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: callToAction;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.8rem;
  padding: 0 .6rem 2rem 1.6rem;
  font-family: ${({ theme }) => theme.font.family.alt};

  .orderBtn{
  
    font-family: ${({ theme }) => theme.font.family.alt};
    border: none;
    padding:1.5rem 4rem;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.secondary};
   color: ${({ theme }) => theme.colors.black};
    
  };
  img {
    width:5rem;
    padding:1rem;
  }

  img:hover {
    width:5rem;
    border-radius:50%;
    // color:red;
    padding:1rem;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;