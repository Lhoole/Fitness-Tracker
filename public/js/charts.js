
fetch('/api/meals')
  .then(response => response.json())
  .then(data => { 
    const junkcount = data.filter(item => item.meal_junk === true).length;
    const healthycount = data.filter(item => item.meal_junk === false).length;

    const mealData = {
      labels: ["Junk", "Healthy"],
      datasets: [
        {
          label: 'Past meals',
          data: [junkcount, healthycount],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(99, 255, 132, 0.2)'],
          borderColor: 'rgba(1, 1, 1, 1)',
          borderWidth: 1
        },
      ]
    };
    // create a new bar chart for meals
    const mealChart = new Chart(document.getElementById('meal-chart'), {
      type: 'pie',
      data: mealData,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }); console.log(mealData)
  });

    // get exercise data
    fetch('api/exercises')
  .then(response => response.json())
  .then(data => {

    const labels = data.map(row => row.exercise_name);
    const timestamp1 = data.map(row => row.date_time_start);
    const timestamp2 = data.map(row => row.date_time_end);
    console.log(labels);
    console.log(timestamp1);
    console.log(timestamp2);

    const durationsArray = [];

    for (let i = 0; i < timestamp1.length; i++) {
      const date1 = new Date(timestamp1[i]);
      const date2 = new Date(timestamp2[i]);
      const duration = Math.abs(date2 - date1) / (1000 * 60);
      durationsArray.push(duration);
    }

    console.log(durationsArray);
    

    // console.log(duration)
    const exerciseData = {
      labels: labels,
      datasets: [
        {
          label: 'Exercise duration (minutes)',
          data: durationsArray, 
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(1, 1, 1, 1)',
          borderWidth: 1
        }
      ]
    };
    // create a new bar chart for exercise
    const exerciseChart = new Chart(document.getElementById('exercise-chart'), {
      type: 'bar',
      data: exerciseData,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        title: {
          display: true,
          text: `Exercise duration for the day: ${durationsArray} hours`
        }
      }
    });
  })





fetch('api/sleeps')
.then(response => response.json())
.then(data => {

    const labels = data.map(row => row.sleep_quality);
    const timestamp1 = data.map(row => row.date_time_start);
    const timestamp2 = data.map(row => row.date_time_end);
    console.log(labels);
    console.log(timestamp1);
    console.log(timestamp2);

    const durationsArray = [];

    for (let i = 0; i < timestamp1.length; i++) {
      const date1 = new Date(timestamp1[i]);
      const date2 = new Date(timestamp2[i]);
      const duration = Math.abs(date2 - date1) / (1000 * 60 * 60);
      durationsArray.push(duration);
    }

    console.log(durationsArray);
    

  const sleepData = {
    labels: labels,
    datasets: [
      {
        label: 'Sleep duration (hours)',
        data: durationsArray, 
        backgroundColor: function(context) {
          const index = context.dataIndex;
          const value = context.dataset.data[index];
          const colors = {
            poor: 'rgba(210, 0, 0, 0.2)',
            fair: 'rgba(255, 191, 0, 0.2)',
            good: 'rgba(35, 136, 35, 0.2)',
            excellent: 'rgba(0, 255, 0, 0.2)'
          };
          return colors[context.chart.data.labels[index]];
        },
        borderColor: 'rgba(1, 1, 1, 1)',
        borderWidth: 1
      }
    ]
  };
  // create a new bar chart for sleep
  const sleepChart = new Chart(document.getElementById('sleep-chart'), {
    type: 'bar',
    data: sleepData,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      title: {
        display: true,
        text: `Sleep duration for the day: ${durationsArray} hours`
      }
    }
  });
})
