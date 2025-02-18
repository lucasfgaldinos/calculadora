import styled, { keyframes } from 'styled-components'

const slideInFwdTop = keyframes`
   0% {
      transform: translateZ(-1400px) translateY(-800px);
      opacity: 0;
   }
   100% {
      transform: translateZ(0) translateY(0);
      opacity: 1;
   }
`

export const Main = styled.main`
   width: 100%;
   min-height: 100vh;
   background-color: #B2E6D4;
   display: flex;
   align-items: center;
   justify-content: center;

   @media screen and (max-width: 500px){
      padding: 1rem;
   }
`

export const TheCalculator = styled.div`
   width: 400px;
   border: 3px solid #0E1116;
   border-radius: 1rem;
   padding: 1.4rem;
   background-color: #8D86C9;
	animation: ${slideInFwdTop} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
   
   @media screen and (max-width: 500px){
      width: 100%;
      border: 2px solid #0E1116;
      padding: 0.7rem;
   }
`

export const Display = styled.div`
   width: 100%;
   padding: 1.1rem;
   background-color: #242038;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   border-radius: 0.8rem;
   border: 3px solid #0E1116;

   @media screen and (max-width: 500px){
      padding: 0.5rem;
      border: 2px solid #0E1116;
   }
`

export const DisplayValue = styled.input`
   background-color: #CAC4CE;
   width: 100%;
   border: 3px solid #0E1116;
   border-radius: 0.5rem;
   height: 3.5rem;
   font-size: 2rem;
   padding: 0 1rem;
   color: #000000;
   text-align: end;

   @media screen and (max-width: 500px){
      border: 2px solid #0E1116;
      height: 3rem;
      font-size: 1.7rem;
      padding: 0 0.5rem;
   }
`

export const DeleteButtonContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-top: 1rem;
   padding: 0 1rem;

   button {
      cursor: pointer;
      border: none;
      background-color: transparent;
      font-size: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.2rem;
      border-radius: 0.3rem;
      transition: 200ms ease;

      &:hover {
         background-color: #FFFFFF33;
      }

      &:active {
         transform: scale(0.95);
      }
   }
   
   @media screen and (max-width: 500px){
      padding: 0 0.3rem;
   }
`

export const ButtonContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 0.6rem;
   padding: 1rem;

   @media screen and (max-width: 500px){
      padding: 0.8rem 0.3rem;
      gap: 0.4rem;
   }
`

export const Button = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   border: 3px solid #0E1116;
   border-radius: 0.4rem;
   width: 100%;
   height: 3rem;
   font-size: 1.5rem;
   cursor: pointer;
   transition: 200ms ease;
   background-color: #4BA3C3;
   ${(props) => props.$doubledWidth && 'grid-column: 1/3;'}
   ${(props) => props.$operator && 'background-color: #F28482;'}
   ${(props) => props.$result && 'background-color: #C8AD55;'}
   ${(props) => props.$clear && 'background-color: #BA324F;'}
   
   &:hover {
      box-shadow: 0 0 0 3px #0E111666;
   }

   &:active {
      transform: scale(0.95);
   }

   @media screen and (max-width: 500px){
      border: 2px solid #0E1116;
      font-size: 1.3rem;
   }
`

export const Footer = styled.footer`
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 10px;
`
