/*
  Create a function (isWeekend) that takes a day of the week (from your enum)
  and returns a boolean value indicating whether it is a working day or a weekend.
*/

enum DayOfWeek {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday",
}

function isWeekend(day: DayOfWeek): boolean {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}
