import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 88%;
  height: 40.5rem;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 2.6rem 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Rating = styled.span`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: .5rem;
`;

export const Customer = styled.span`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    width: 5rem;
    height: 5rem;
    // border-radius: 50%;
    object-fit: cover;
  };

  span {
    font-weight: ${({ theme }) => theme.font.weight.bold};
  };
`;

export const Testimonial = styled.p`
  width: 100%;
  height: auto;
  margin-top:1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align:center;

  ::before {
    content: open-quote;
  };

  ::after {
    content: close-quote;
  };
`;