import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 66%;
  height: 100vh;
  min-height: 65.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  gap: 2rem;

  @media (max-width: 966px) {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0;
  };

  @media (max-width: 1120px) {
    width: 90%;
  };
`;

export const Content = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 28rem;
  height: fit-content;
  display: flex;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    width: fit-content;
  };

  h2 {
    color: ${({ theme }) => theme.colors.black};
    width: fit-content;
    font-family: ${({ theme }) => theme.font.family.tertiary};
    letter-spacing:1.5rem;
    font-size:12rem;
    line-height:1;
  };

  p {
    max-width: 28rem;
    margin: 2rem 0;
    color: ${({ theme }) => theme.colors.black};
  };

  @media (max-width: 966px) {
    align-items: center;
    text-align: center;
  };
`;

export const Image = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: fit-content;
  // display: flex;
  // justify-content: flex-start;
  // align-items: flex-start;
  position: relative;

  img {
    object-fit: cover;
    width: 33.7rem;
    height: 48.8rem;
  };



  @media (max-width: 996px) {
    display: none;
  };
`;