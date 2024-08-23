function requiredReading(bookPages, pagesPerHour, days) {
    let totalTimeToRead = bookPages / pagesPerHour;
    let requiredHoursPerDay = totalTimeToRead / days

    console.log(requiredHoursPerDay);
}
// requiredReading(212, 20, 2);
requiredReading(432, 15 , 4);