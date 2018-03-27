// CHALLENGE 1: TIME CONVERSION
// Given a time in 12-hour AM/PM format ('HH:MM:SSAA' HH hours, MM Mins, SS Seconds,
// AA AM or PM), convert it to military (24-hour) time ('HH:MM:SS').
//
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
// Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
//
// Example: timeConvert('07:05:45PM') -> '19:05:45'
const timeConvert = {

}
// CHALLENGE 2: TIME DIFFERENCE
// Given 2 times in 12-hour AM/PM format ('HH:MM:SSAA' HH hours, MM Mins, SS Seconds,
// AA AM or PM), where the second time is always ahead of the first (so if
// hour < first time, this is the next day), find the difference between the
// two times, returning answer in format 'HH:MM:SS'
//
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
// Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
//
// Example: timeConvert('07:05:45PM', '09:12:50PM') -> '02:07:05'
const timeDiff = {

}

// CHALLENGE 3: MINIMUM - MAXIMUM SUM
// Given five positive integers, find the minimum and maximum values that can
// be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line
// of two space-separated long integers.
//
// Example: minMaxSum('1 2 3 4 5') -> '10 14'
const minMaxSum = {

}


export default {
    timeConvert,
    timeDiff,
    minMaxSum,
}