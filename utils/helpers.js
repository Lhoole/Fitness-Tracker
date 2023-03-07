module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // format large numbers with commas
      return parseInt(amount).toLocaleString();
    },
    get_emoji: () => {
      const randomNum = Math.random();
  
     // Return a random emoji
    if (randomNum > 0.7) {
        return `<span for="img" aria-label="runner">🏃</span>`;
      } else if (randomNum > 0.4) {
        return `<span for="img" aria-label="cyclist">🚴</span>`;
      } else {
        return `<span for="img" aria-label="swimmer">🏊</span>`;
      }
    },
    totaltime: (timestart, timeend) => {
      var startDate = new Date(timestart);
      var endDate   = new Date(timeend);
      var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
      var date = new Date(0);
      date.setSeconds(seconds); // specify value for SECONDS here
      var timeString = date.toISOString().substring(11, 19);
      return timeString;
    },
  };
  
  