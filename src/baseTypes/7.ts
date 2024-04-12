/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  Mon = 0,
  Tue = 0,
  Wed = 0,
  Thu = 0,
  Fri = 0,
  Sut = 1,
  Sun = 1
}

function isWeekend(weekDay:Weekdays):boolean {
  return Boolean(weekDay)
}