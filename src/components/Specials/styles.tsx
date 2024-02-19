import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 95%;
  height: auto;
  min-height: 70.6rem;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  gap: 4.3rem;

  @media (max-width: 1120px) {
    width: 95%;
    .banner{
      display:flex;     
      margin: 0 auto;    
       height: 25rem;
     }
     .banner-right{
    position:absolute;
    right:0;
   }
.banner-right img{
     position:absolute;
     max-height:object-fit;
     display:none;
     top:0;
     right:0;
     width:55rem; 
   }
   
  };
  .review-header h1{
    
    text-align:center;
    margin-bottom:3rem;
    
   

    }
`;

export const Top = styled.div<HTMLAttributes<HTMLDivElement>>`
background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  margin-top:5rem;
  // height: fit-content;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  gap: 2rem;
  border-radius: 3rem;

  button {
    width: 23rem; 
  };
// Smaller Screens
  @media (max-width: 840px) {
    flex-direction: column;
    
    h1 {
      text-align: center;
      font-size:12px
      
    };
   

    h2 {
      text-align: center;  
    };
    .banner{
      display:inline-flex;
      margin:0 auto;
     }
     button {
      width: 95%; 
    };
  };

  .banner{
   display:flex;
    position:relative;
    height: 25rem;
    margin-bottom:12rem;
    // padding-left:8rem;
    overflow:hidden;
   
  }
  .banner-right{
 position:absolute;
 right:0;

}

.banner-right img{
  position:absolute;
  max-height:object-fit;
  // display:none;
  top:0;
  right:0;
  width:55rem;
 
}

.banner-left{
  disply:block;
  margin:auto 0;
  margin-left:2rem;
}

h1 {
  // text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.font.family.alt};

};

h2 {
  // text-align: center;
  margin-bottom:1rem;
  color:white;
  font-family: ${({ theme }) => theme.font.family.alt};
font-size:3.5rem;
};

h2 span{
  color: ${({ theme }) => theme.colors.secondary};
}
`;

export const Cards = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
 
 

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;

    height: fit-content;
    // display: flex;
    // justify-content: space-between;
    align-items: center;
    gap: 1rem;
  };
  

`;