function dayOfWeek(index) {
    if (index < 1 || index > 7) {
        console.log('Invalid day!');
    } else {
        let days = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ];

        console.log(days[index - 1]);

    }
}

dayOfWeek(3);
// dayOfWeek(6);
// dayOfWeek(11);
