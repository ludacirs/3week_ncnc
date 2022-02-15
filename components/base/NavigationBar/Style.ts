import styled from 'styled-components';

export const NavigationBarWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 50px;
  z-index: 2;
`;

export const SlideWrapper = styled.ul`
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderBottom};
`;
