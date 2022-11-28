import styled, { css } from 'styled-components';

interface SidebarStatusOpenStyleProp {
  isOpened?: boolean;
  active?: boolean;
}

export const Container = styled.div<SidebarStatusOpenStyleProp>`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  align-items: center;
  justify-items: center;
  height: 100vh;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  background: rgba(10, 10, 10, .65);
  box-shadow: 0 8px 32px rgb(2, 4, 24);
  border-right: 2px solid rgba(255, 255, 255, .09);
  transition: .4s;
  transition-delay: .1s;

  ${({ isOpened }) => css`
    width: ${isOpened ? 360 : 140}px;
  `}
`;

export const Logo = styled.img<SidebarStatusOpenStyleProp>`
  transition: .4s;

  ${({ isOpened }) => css`
    width: ${!isOpened ? 100 : 140}px;
  `}
`;

export const Title = styled.h3<SidebarStatusOpenStyleProp>`
  color: #fff;
  font-size: 36px;
  margin-top: 12px;
  font-variant: small-caps;
  pointer-events: none;
  transition: .3s;
  transition-delay: .1s;

  ${({ isOpened }) => css`
    scale: ${!isOpened ? 0 : 1};
    opacity: ${!isOpened ? 0 : 1};
  `}
`;

export const NavContainer = styled.nav<SidebarStatusOpenStyleProp>`
  padding: 0 30px;
`;

export const NavList = styled.ul<SidebarStatusOpenStyleProp>`
  ${({ isOpened }) => css`
    display: ${isOpened ? '' : 'flex'};
    flex-direction: ${isOpened ? '' : 'column'};
    align-items: ${isOpened ? '' : 'center'};
    justify-items: ${isOpened ? '' : 'center'};
  `}
`;

export const NavItemList = styled.li<SidebarStatusOpenStyleProp>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 4px;
  height: 56px;
  padding: 0 16px;
  margin: 8px 0;
  color: #fff;
  transition: .2s;

  ${({ active, isOpened }) => css`
    background: ${active ? '#ff328e' : ''} !important;
    width: ${isOpened ? '100%' : '50px'};
  `}

  &:hover {
    background: rgba(255, 255, 255, .1);
  }

  span {
    font-size: 18px;
    margin-left: 8px;
    opacity: 0;
    transition: .01s;

    ${({ isOpened }) => css`
      opacity: ${isOpened ? 1 : 0};
      pointer-events: ${isOpened ? 'visible' : 'none'};
    `}
  }
`;

export const NavTitle = styled.div<SidebarStatusOpenStyleProp>`
  color: #dadada;
  margin: 40px 0 18px;
  pointer-events: none;
  transition: .2s;
  transition-delay: .1s;

  ${({ isOpened }) => css`
    opacity: ${isOpened ? 1 : 0};
  `}
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: -25px;
  top: 80px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: linear-gradient(
        90deg,
        transparent 50%,
        rgba(10, 10, 10, .65) 10%
    );

`;
