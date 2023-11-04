function solution(a, b) {
  let answer = '';
  const dayOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  
  const day = new Date(2016, a-1, b);
  answer = dayOfWeek[day.getDay()]
  
  return answer;
}