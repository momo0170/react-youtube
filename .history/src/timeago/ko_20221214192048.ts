export default koreanFormat (
  number: number,
  index: number
): [string, string] {
  return [
    ['방금', '곧'],
    ['%s초 전', '%s초 후'],
    ['1분 전', '1분 후'],
    ['%s분 전', '%s분 후'],
    ['1시간 전', '1시간 후'],
    ['%s시간 전', '%s시간 후'],
    ['1일 전', '1일 후'],
    ['%s일 전', '%s일 후'],
    ['1주 전', '1주 후'],
    ['%s주 전', '%s주 후'],
    ['1개월 전', '1개월 후'],
    ['%s개월 전', '%s개월 후'],
    ['1년 전', '1년 후'],
    ['%s년 전', '%s년 후'],
  ][index] as [string, string];
}
