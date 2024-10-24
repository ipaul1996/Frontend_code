// Date.UTC() is a static method that returns the number of milliseconds since
// January 1, 1970, 00:00:00 UTC, based on the given date and time components.
// It treats the date as UTC and doesn't create a Date object like the Date() constructor.
/*
Date.UTC(year)                                      // Specify just the year
Date.UTC(year, monthIndex)                          // Specify year and month (0-indexed)
Date.UTC(year, monthIndex, day)                     // Specify year, month, and day
Date.UTC(year, monthIndex, day, hour)               // Specify year, month, day, and hour
Date.UTC(year, monthIndex, day, hour, min)          // Specify year, month, day, hour, and minute
Date.UTC(year, monthIndex, day, hour, min, sec)     // Specify year, month, day, hour, min, sec
Date.UTC(year, monthIndex, day, hour, min, sec, ms) // Specify year, month, day, hour, min, sec, ms
*/
// Parameters:
// - year: The year (0-99 gets mapped to 1900-1999, others are actual year)
// - monthIndex: (Optional) Month (0 = January, 11 = December), defaults to 0
// - day: (Optional) Day of the month, defaults to 1
// - hour: (Optional) Hours (0-23), defaults to 0
// - minute: (Optional) Minutes (0-59), defaults to 0
// - second: (Optional) Seconds (0-59), defaults to 0
// - millisecond: (Optional) Milliseconds (0-999), defaults to 0

// Returns:
// - A number representing the timestamp in milliseconds since the epoch.
// - Returns NaN if the date is invalid.

// Differences from Date():
// 1. Date.UTC() uses UTC, not local time.
// 2. It returns a timestamp (number), not a Date object.
// 3. Single number is treated as the year, not a timestamp.


// 1. Specify just the year
console.log(Date.UTC(2024));                     // 1704067200000 (Timestamp for 2024-01-01T00:00:00.000Z)

// 2. Specify year and month (0-indexed)
console.log(Date.UTC(2024, 9));                  // 1727740800000 (Timestamp for 2024-10-01T00:00:00.000Z)

// 3. Specify year, month, and day
console.log(Date.UTC(2024, 9, 23));              // 1729641600000 (Timestamp for 2024-10-23T00:00:00.000Z)

// 4. Specify year, month, day, and hour
console.log(Date.UTC(2024, 9, 23, 10));          // 1729677600000 (Timestamp for 2024-10-23T10:00:00.000Z)

// 5. Specify year, month, day, hour, and minute
console.log(Date.UTC(2024, 9, 23, 10, 30));      // 1729679400000 (Timestamp for 2024-10-23T10:30:00.000Z)

// 6. Specify year, month, day, hour, minute, and second
console.log(Date.UTC(2024, 9, 23, 10, 30, 45));  // 1729679445000 (Timestamp for 2024-10-23T10:30:45.000Z)

// 7. Specify year, month, day, hour, minute, second, and millisecond
console.log(Date.UTC(2024, 9, 23, 10, 30, 45, 500)); // 1729679445500 (Timestamp for 2024-10-23T10:30:45.500Z)

// 8. for years 0 - 99
console.log(Date.UTC(99, 0));                 // 915148800000 (maps 99 to 1999) (Timestamp for 1999-01-01T00:00:00.000Z)

// 9. monthIndex overflows
console.log(Date.UTC(2024, 15, 23));          // 1745366400000 (Timestamp for 2025-04-23T00:00:00.000Z as monthIndex overflows)
