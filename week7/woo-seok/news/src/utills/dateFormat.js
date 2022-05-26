// 날짜 포맷 변경
export function toStringByFormatting(date, delimiter = '-') {
  const year = date.getFullYear();
  const month = leftPad(date.getMonth() + 1);
  const day = leftPad(date.getDate());
  return [year, month, day].join(delimiter);
}

// 10 미만 일,월 포맷 변경
export function leftPad(value) {
  return value >= 10 ? value : `0${value}`;
}
