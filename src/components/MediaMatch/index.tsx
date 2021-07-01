import styled, { css } from 'styled-components';

interface MediaMatchProps {
  hideOnDesktop?: boolean
  hideOnMobile?: boolean
  hideOnMobileLessIpad?: boolean
}

const mediaMatchModifiers = {
  hideOnDesktop: () => css`
    @media (min-width: 769px) {
      display: none;
    }
  `,
  hideOnMobile: () => css`
    @media (max-width: 768px) {
      display: none;
    }
  `,
  hideOnMobileLessIpad: () => css`
  @media (max-width: 767px) {
    display: none;
  }
`,
}

export default styled.div<MediaMatchProps>`
  ${props => props.hideOnDesktop === true && mediaMatchModifiers.hideOnDesktop()}
  ${props => props.hideOnMobile === true && mediaMatchModifiers.hideOnMobile()}
  ${props => props.hideOnMobileLessIpad === true && 
    mediaMatchModifiers.hideOnMobileLessIpad()}
`;