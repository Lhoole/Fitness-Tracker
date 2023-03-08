




fetch('/api/meals')
  .then(response => response.json())
  .then(data => { 
    console.log(data)

    const labels = data.map(row => row.date_time_start);
    const values = data.map(row => row.meal_junk);

    console.log(labels);
    console.log(values);

    const mealData = {
      labels: labels,
      datasets: [
        {
          label: 'Meals',
          data: values,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    };
    // create a new bar chart for meals
    const mealChart = new Chart(document.getElementById('meal-chart'), {
      type: 'bar',
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

  //   // get exercise data
  //   fetch('api/exercises')
  // .then(response => response.json())
  // .then(data => {
  //   const exerciseData = {
  //     labels: data.names,
  //     datasets: [
  //       {
  //         label: 'Exercise duration (minutes)',
  //         data: data.durations,
  //         backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //         borderColor: 'rgba(54, 162, 235, 1)',
  //         borderWidth: 1
  //       }
  //     ]
  //   };
  //   // create a new bar chart for exercise
  //   const exerciseChart = new Chart(document.getElementById('exercise-chart'), {
  //     type: 'bar',
  //     data: exerciseData,
  //     options: {
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   });
  // });

  //   // get sleep data
  //   fetch('/api/sleeps')
  //     .then(response => response.json())
  //     .then(data => {
  //       const sleepData = {
  //         labels: data.dates,
  //         datasets: [
  //           {
  //             label: 'Sleep duration (hours)',
  //             data: data.durations,
  //             backgroundColor: 'rgba(255, 206, 86, 0.2)',
  //             borderColor: 'rgba(255, 206, 86, 1)',
  //             borderWidth: 1
  //           }
  //         ]
  //       };
  //       // create a new bar chart for sleep
  //               const sleepChart = new Chart(document.getElementById('sleep-chart'), {
  //         type: 'bar',
  //         data: sleepData,
  //           options: {
  //             scales: {
  //             yAxes: [{
  //             ticks: {
  //             beginAtZero: true
  //             }
  //           }]
  //         }
  //       }
  //     });
  //   });