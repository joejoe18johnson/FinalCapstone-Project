import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.footer<HTMLAttributes<HTMLElement>>`
  width: 88%;
  height: 30.7rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.family.secondary};

  ::before {
    content: "";
    width: 100%;
    height: 30.7rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.black};
    z-index: -1;

    @media (max-width: 840px) {
      height: 40rem;
    };

    @media (max-width: 700px) {
      height: 90rem;
    };

    @media (max-width: 337px) {
      height: 95rem;
    };
  };

  @media (max-width: 1120px) {
    width: 90%;
  };

  @media (max-width: 840px) {
    height: 40rem;
  };

  @media (max-width: 700px) {
    height: 90rem;
  };

  @media (max-width: 337px) {
    height: 95rem;
  };
`;

export const Content = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 700px) {
    flex-direction: column;
  };
`;

export const Copyright = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  text-align: center;

  a {
    text-decoration: underline;
    line-height: 150%;
  };
`;

export const Image = styled.img<HTMLAttributes<HTMLImageElement>>`
  width: 7.5rem;
  height: 16.1rem;
  // object-fit: cover;
  margin-top: 4.8rem;


  @media (max-width: 840px) {
    display: none;
  };
`;

export const Column = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 7.7rem;

  h4 {
    height: 4.32rem;
    font-family: ${({ theme }) => theme.font.family.alt};
    color: ${({ theme }) => theme.colors.secondary};
  };

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;

    li {
      list-style: none;
      font-family: ${({ theme }) => theme.font.family.secondary};
    };
  };
`;