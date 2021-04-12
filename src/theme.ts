// px to rem
const calcRem = (px: number): string => `${px / 16}rem`;

const colors = {
  black: '#010100',
  white: '#f2f2f2',
  indigo: '#252626', // 남색
  grayOne: '#F7F7F7', // 247 247 247 살짝 회색. header 최상단 등에 사용
  grayTwo: '#E5E5E5', // 229 229 229 중간. border에 넣음
  grayThree: '#999999', // 153 153 153 어두운 회색, 글자 opacity 같은 느낌
  grayFour: '#111', // 거의 검은색. 회색 글씨 hover시 검정으로 보여주자
  pointColor: '#CD0A01',
  pointColorTwo: '#536162',
};

const fontSizes = {
  xsmall: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  xxxxl: calcRem(16 * 2),
  xxxxxl: calcRem(16 * 3),
};

const paddings = {
  xxsmall: calcRem(4),
  xsmall: calcRem(6),
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  xxxxl: calcRem(24),
  xxxxxl: calcRem(36),
  global: calcRem(16 * 6), //  // 글로벌하게 좌/우 공백을 주기 위함 + 섹션간 구분은 무조건 global하게 주자
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  xxxxl: calcRem(24),
  xxxxxl: calcRem(28),
  global: calcRem(16 * 6), // 글로벌하게 좌/우 공백을 주기 위함
};

const deviceSizes = {
  tablet: `@media all and (min-width: 767px) and (max-width: 1023px)`,
  desktop: `@media all and (min-width: 1023px)`,
};

const typography = {
  // cormorant: {
  //   fontFamily: '"Cormorant", sans-serif',
  // },
};

const theme = {
  colors,
  fontSizes,
  paddings,
  margins,
  deviceSizes,
  typography,
};

export default theme;
