import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ZoomIn from '../../animation/ZoomIn';
import CinemaCode from '../../CinemaCode';
import { LoginContext } from '../../Context/loginContext';
import { CINEPASSAUTH } from '../type/cinepassAuth';

const S = {
  Wrapper: styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.5);
    /* background-color: white; */
    z-index: 1000000;
    color: white;

    .modal {
      position: fixed;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 300px; // height는 내용에 맞춰 알아서 늘어나도록. 아이폰 5가 320px이 가로

      /* ${(props) => props.theme.deviceSizes.desktop} {
        width: 30%;
      } */

      background: white;
      border-radius: 6px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

      color: ${(props) => props.theme.colors.grayFour};

      animation: ${ZoomIn} 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

      & > * {
        & {
          padding: ${(props) => props.theme.paddings.base};
        }
      }

      .modal-title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: ${(props) => props.theme.fontSizes.base};
        margin: 16px 0;
      }

      .modal-contents {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .confirm-button {
        width: 100%;
        background: ${(props) => props.theme.colors.grayFour};
        border-radius: 0 0 6px 6px;

        color: ${(props) => props.theme.colors.white};
        outline: none;
        border: none;
        cursor: pointer;
        margin-top: ${(props) => props.theme.margins.base};
      }
    }
  `,
  Input: styled.input`
    border: 2px solid black;
    border-radius: 6px;
    outline: none;

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.pointColorTwo};
    }
  `,
};

interface IModalProps {
  title?: string;
  contents?: string;
}

function Modal({ title = 'title', contents = 'contents' }: IModalProps) {
  const [cinemaCode, setCinemaCode] = useState<string>('');

  const { setIsLoggedIn } = useContext(LoginContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setCinemaCode(e.target.value);
  const confirmClick = () => {
    const Theater = Object.keys(CinemaCode).find((key) => CinemaCode[key] === cinemaCode);

    if (Theater) {
      setIsLoggedIn(true);
      localStorage.setItem(CINEPASSAUTH, JSON.stringify(Theater));
    } else {
      alert('잘못된 코드를 입력하셨습니다.');
      setCinemaCode('');
    }
  };

  return (
    <S.Wrapper>
      <div className="modal">
        <div className="modal-title">{title}</div>
        <S.Input type="text" value={cinemaCode} onChange={handleInputChange} placeholder="극장 코드" />
        <button className="confirm-button" onClick={confirmClick}>
          확인
        </button>
      </div>
    </S.Wrapper>
  );
}

export default Modal;
