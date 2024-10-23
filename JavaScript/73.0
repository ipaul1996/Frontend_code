// JavaScript Date objects represent a specific moment in time consistently 
// across different platforms and environments. They contain a numerical value, 
// known as a timestamp, which indicates the number of milliseconds since 
// midnight on January 1, 1970, UTC. This starting point is commonly referred 
// to as the epoch.

// The timestamp can be interpreted in two ways: as local time or as 
// Coordinated Universal Time (UTC). Note that the local timezone is not 
// stored within the Date object; instead, it is determined by the user's 
// device environment.

// Example: The timestamp of 0 represents a unique instant in history, which can 
// be interpreted as:
// - As UTC time: Midnight on January 1, 1970, UTC
// - As local time in New York (UTC-5): 19:00:00 on December 31, 1969

// JavaScript provides two groups of Date methods to work with date components, 
// depending on whether you are using local time or UTC:

// Local time methods: These methods interpret the timestamp as local time
// - getFullYear()        // Get the year (e.g., 2024)
// - setFullYear()        // Set the year (e.g., 2025)
// - getMonth()           // Get the month (0-11)
// - setMonth()           // Set the month (0-11)
// - getDate()            // Get the day of the month (1-31)
// - setDate()            // Set the day of the month (1-31)
// - getHours()           // Get the hour (0-23)
// - setHours()           // Set the hour (0-23)
// - getMinutes()         // Get the minutes (0-59)
// - setMinutes()         // Set the minutes (0-59)
// - getSeconds()         // Get the seconds (0-59)
// - setSeconds()         // Set the seconds (0-59)
// - getMilliseconds()    // Get the milliseconds (0-999)
// - setMilliseconds()    // Set the milliseconds (0-999)
// - getDay()             // Get the day of the week (0-6, where 0 is Sunday)

// UTC methods: These methods interpret the timestamp as UTC time
// - getUTCFullYear()     // Get the year (e.g., 2024)
// - setUTCFullYear()     // Set the year (e.g., 2025)
// - getUTCMonth()        // Get the month (0-11)
// - setUTCMonth()        // Set the month (0-11)
// - getUTCDate()         // Get the day of the month (1-31)
// - setUTCDate()         // Set the day of the month (1-31)
// - getUTCHours()        // Get the hour (0-23)
// - setUTCHours()        // Set the hour (0-23)
// - getUTCMinutes()      // Get the minutes (0-59)
// - setUTCMinutes()      // Set the minutes (0-59)
// - getUTCSeconds()      // Get the seconds (0-59)
// - setUTCSeconds()      // Set the seconds (0-59)
// - getUTCMilliseconds()  // Get the milliseconds (0-999)
// - setUTCMilliseconds()  // Set the milliseconds (0-999)
// - getUTCDay()          // Get the day of the week (0-6, where 0 is Sunday)


// Date Time String Format:
// JavaScript supports various ways to format a date as a string, 
// but the only universally supported format is the date time 
// string format is:

// YYYY-MM-DDTHH:mm:ss.sssZ

// - YYYY: The year, represented by four digits (0000 to 9999).
// - MM: The month, represented by two digits (01 to 12). Defaults to 01.
// - DD: The day of the month, represented by two digits (01 to 31). Defaults to 01.
// - T: A literal character that signifies the beginning of the time part. 
//      This character is required when specifying the time.
// - HH: The hour, represented by two digits (00 to 23). 
//        24:00:00 is allowed and represents midnight at the beginning of the next day. Defaults to 00.
// - mm: The minute, represented by two digits (00 to 59). Defaults to 00.
// - ss: The second, represented by two digits (00 to 59). Defaults to 00.
// - sss: The millisecond, represented by three digits (000 to 999). Defaults to 000.
// - Z: The timezone offset, which can either be:
//      - The literal character 'Z' indicating UTC, or
//      - A sign (+ or -) followed by HH:mm, indicating the offset in hours and minutes from UTC.

// Various components can be omitted, allowing for valid formats such as:
// Date-only forms:
// - YYYY (e.g., "2023")
// - YYYY-MM (e.g., "2023-10")
// - YYYY-MM-DD (e.g., "2023-10-23")

// Date-time forms:
// - Any of the above date-only forms followed by T and a time component.
//   Valid time components can include:
//   - HH:mm (e.g., "T14:48")
//   - HH:mm:ss (e.g., "T14:48:00")
//   - HH:mm:ss.sss (e.g., "T14:48:00.000")
// Each combination can also include a time zone offset.

// Examples of valid date time strings:
// - "2011-10-10" (date-only form)
// - "2011-10-10T14:48:00" (date-time form)
// - "2011-10-10T14:48:00.000+09:00" (date-time form with milliseconds and time zone)

// When a time zone offset is not provided:
// - Date-only forms are interpreted as UTC time.
// - Date-time forms are interpreted as local time.

// toISOString() method returns a date string in the format: 
// YYYY-MM-DDTHH:mm:ss.sssZ (UTC).
// Example: new Date().toISOString() produces "2024-10-23T12:00:00.000Z".

// toString() method returns a string representation of the date in a 
// human-readable format based on the local timezone.
// Example: new Date().toString() produces "Thu Oct 24 2024 01:34:47 GMT+0530 (India Standard Time)".

// toDateString() method returns a string representing the date portion only,
// e.g., new Date().toDateString() produces "Thu Oct 24 2024".

// toTimeString() method returns a string representing the time portion only,
// e.g., new Date().toTimeString() produces "01:34:47 GMT+0530 (India Standard Time)".



// The Date() constructor creates Date objects.
// When called as a function, it returns the current date and time as a string.
// Examples of usage:

// Create a Date object for the current date and time
new Date(); 
console.log(new Date());  // 2024-10-23T20:33:29.208Z
// When we console date objct JS internally calls toString() or toISOString() based on 
// the current environment

// Create a Date object from a numeric value (milliseconds since epoch)
new Date(1633024800000); 

// Create a Date object from a date string
new Date("2024-10-23T14:48:00Z"); // UTC time
new Date("2024-10-23T14:48:00+05:30"); // Local time with offset (+5:30)
new Date("2024-10-23"); // Only date, defaults to midnight in UTC time
new Date("2024-10-23T00:00:00"); // Midnight of the given date (local time)

// Create a Date object from another Date object
new Date(new Date()); 

// Create a Date object specifying year and month (0-indexed)
new Date(2024, 9); // local time

// Create a Date object specifying year, month, and day
new Date(2024, 9, 23); // local time


// Create a Date object specifying year, month, day, and hours
new Date(2024, 9, 23, 10); // local time

// Create a Date object specifying year, month, day, hours, and minutes
new Date(2024, 9, 23, 10, 30); // local time

// Create a Date object specifying year, month, day, hours, minutes, and seconds
new Date(2024, 9, 23, 10, 30, 45); // local time

// Create a Date object specifying year, month, day, hours, minutes, seconds, and milliseconds
new Date(2024, 9, 23, 10, 30, 45, 500); // local time

console.log(new Date(null)); // 1970-01-01T00:00:00.000Z  // as null coerced to 0
console.log(new Date(undefined)); // Invalid Date
// undefined is already a primitive but not a string, so it will be coerced to a number, which is NaN 
// and therefore not a valid timestamp.

console.log(Date()); // Thu Oct 24 2024 02:11:35 GMT+0530 (India Standard Time)

// The Date.now() static method returns the number of milliseconds elapsed since the epoch
console.log(Date.now()); // 1729716187991

