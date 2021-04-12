import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import ShowUp from '../../animation/ShowUp';
import apiWrapper from '../../apiWrapper';
import CinemaInfo from '../../CinemaInfo';
import { CINEPASSAUTH } from '../type/cinepassAuth';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    animation: ${ShowUp} 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 50%;
    min-width: 300px;
  `,
  Input: styled.input`
    padding: 12px;
    margin: 6px;

    border: 2px solid black;
    border-radius: 6px;
    outline: none;

    width: 100%;

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.pointColorTwo};
    }
  `,
  Select: styled.select`
    padding: 12px;
    margin: 6px;

    border: 2px solid black;
    border-radius: 6px;
    outline: none;

    width: 100%;

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.pointColorTwo};
    }
  `,
  Button: styled.button`
    padding: 12px;
    margin: 6px;

    border: 2px solid black;
    border-radius: 6px;
    outline: none;

    width: 100%;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.black};
    color: white;

    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.grayThree};
      background: ${({ theme }) => theme.colors.grayThree};
      color: black;
      transition: all 0.25s ease-in-out;
    }
  `,
  Error: styled.span`
    color: ${(props) => props.theme.colors.pointColor};
    width: 100%;
    margin-bottom: ${(props) => props.theme.margins.base};

    &:before {
      content: '⚠️';
    }
  `,
  Title: styled.div`
    font-size: 24pt;
    margin-bottom: 16px;
  `,
};

// 이후 더 정확한 타이핑할 것.
type FormData = {
  theater: string;
  phone: string;
  name: string;
  gender: 'male' | 'female';
  movie: string;
};

function AfterLogin() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (!loading) {
      // api request. serverless labmda에 데이터를 페칭한다
      apiWrapper('/insertData', 'POST', data, {
        success: () => {
          alert('성공적으로 등록되었습니다.');
          setLoading(false);
        },
        error: () => {
          alert('에러가 발생했습니다.');
          setLoading(false);
        },
      });
    } else {
      alert('요청이 처리 중입니다. 기다려주세요');
    }

    return;
  };

  const onInvalid = (errors) => {
    console.log(errors);
    alert('유효하지 않은 정보입니다. 누락된 부분을 추가해주세요');
  };

  return (
    <S.Wrapper>
      <S.Title>{JSON.parse(localStorage.getItem(CINEPASSAUTH))} 관리 패널</S.Title>
      <S.Form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <S.Input value={JSON.parse(localStorage.getItem(CINEPASSAUTH))} {...register('theater')} />
        <S.Input placeholder="전화번호" name="phone" {...register('phone', { required: true })} />
        {errors.phone && <S.Error>여권에 적힌 전화번호를 입력해주세요</S.Error>}
        <S.Input placeholder="성함" name="name" {...register('name', { required: true })} />
        {errors.name && <S.Error>고객의 성함을 입력해주세요</S.Error>}
        <S.Select placeholder="성별" name="gender" {...register('gender', { required: true })}>
          <option value="">성별</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </S.Select>
        {errors.gender && <S.Error>성별을 선택해주세요</S.Error>}
        <S.Select placeholder="영화제목" name="movie" {...register('movie', { required: true })}>
          <option value="">영화를 선택하세요</option>
          {CinemaInfo[JSON.parse(localStorage.getItem(CINEPASSAUTH))].map((movie) => (
            <option value={movie} key={movie}>
              {movie}
            </option>
          ))}
        </S.Select>
        {errors.movie && <S.Error>고객이 시청할 영화를 선택해주세요</S.Error>}
        <S.Button>제출하기</S.Button>
      </S.Form>
    </S.Wrapper>
  );
}

export default AfterLogin;
