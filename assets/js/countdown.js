function updateCountdown() {
    const now = new Date();
    const [month, day, year, time] = '10/08/2024 12:00AM'.split(/[\/\s]/);
    const [hours, minutes] = time.match(/\d+/g);
    const ampm = time.match(/[AP]M/)[0];
    const targetDate = new Date(year, month - 1, day, 
        ampm === 'PM' ? (hours === '12' ? 12 : parseInt(hours) + 12) : (hours === '12' ? 0 : hours), 
        minutes
    );

    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.querySelector('.days .digit-wrapper').textContent = days.toString().padStart(2, '0');
        document.querySelector('.hours .digit-wrapper').textContent = hours.toString().padStart(2, '0');
        document.querySelector('.minutes .digit-wrapper').textContent = minutes.toString().padStart(2, '0');
        document.querySelector('.seconds .digit-wrapper').textContent = seconds.toString().padStart(2, '0');
    } else {
        // Timer has expired
        document.querySelector('.days .digit-wrapper').textContent = '00';
        document.querySelector('.hours .digit-wrapper').textContent = '00';
        document.querySelector('.minutes .digit-wrapper').textContent = '00';
        document.querySelector('.seconds .digit-wrapper').textContent = '00';
    }
}

// Initial call to set the countdown immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);