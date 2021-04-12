import ICinemaCode from './Components/interface/CinemaCode.interface';

// source에 다 노출되므로 나중에 이 코드들은 나중에 다 바꾸고, lambda 내부에서 인증 처리할 것. 지금은 가라로
const CinemaCode: ICinemaCode = {
  EMU: 'emu',
  SEOUL: 'seoul',
  KUNKUK: 'kunkuk',
  GWANGJU: 'gwangju',
};

export default CinemaCode;
