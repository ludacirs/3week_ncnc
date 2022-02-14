import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './Style';
import { MenuBar } from 'components/base';

import { IcoMenuBar, IcoClose, IcoArrow } from 'public/images';

const Header = () => {
  const [slideToggle, setSlideToggle] = useState(false);

  const handleToggleMenu = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    const target = e.target as HTMLElement;
    const targetElem = target.closest('.toggle-button');
    if (targetElem) {
      setSlideToggle(!slideToggle);
    }
  };
  const handleCloseMenu = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    setSlideToggle(!slideToggle);
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderInner>
        <S.HamburgerContainer className={'toggle-button'}>
          <Image src={IcoMenuBar} width="30" height="30" onClick={handleToggleMenu} />
        </S.HamburgerContainer>
        <S.Title>니콘내콘</S.Title>
        <S.Hidden />
      </S.HeaderInner>
      <S.MyPageWrapper className={`toggle-button ${slideToggle ? 'show' : 'hidden'}`}>
        <S.HeaderMenu>
          <S.MenuWrapper>
            <MenuBar img={IcoClose} onClick={handleCloseMenu}>
              마이페이지
            </MenuBar>
            {/* <div>작성 공간</div> */}
          </S.MenuWrapper>
        </S.HeaderMenu>
      </S.MyPageWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
