import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.nav<HTMLAttributes<HTMLElement>>`
  width: 100%;
  height: 100%;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  };

  .basketIcon {
    max-width: 3.5rem;
  };

  .orderBtn {
    padding: 1rem 2.5rem;
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.border.radius};
    background-color: ${({ theme }) => theme.colors.primary};
  };

 .nav-li:hover{
  border-bottom: solid 1px ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
 }

  @media (max-width: 768px) {
    display: none;
  };
`;