
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

    // const filteredData = {
    //   date_time_start: data.date_time_start,
    //   date_time_end: data.date_time_end,
    //   exercise_name: data.exercise_name,
    //   // durations: data.durations.filter(duration => duration >= 10)
    // };
    // console.log(filteredData)

    const labels = data.map(row => row.exercise_name);
    const timestamp1 = data.map(row => row.date_time_start);
    const timestamp2 = data.map(row => row.date_time_end);
    console.log(labels);
    console.log(timestamp1);
    console.log(timestamp2);

    // const timestamp1 = filteredData.date_time_start;
    // const timestamp2 = filteredData.date_time_end;
    

    // const date1 = new Date(timestamp1);
    // const date2 = new Date(timestamp2);

    // console.log(date1)
    
    
    // const duration = Math.abs(date2 - date1) / (1000 * 60 * 60); 


    const durationsArray = [];

    for (let i = 0; i < timestamp1.length; i++) {
      const date1 = new Date(timestamp1[i]);
      const date2 = new Date(timestamp2[i]);
      const duration = Math.abs(date2 - date1) / (1000 * 60 * 60);
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
          borderColor: 'rgba(54, 162, 235, 1)',
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

  const filteredData = {
    date_time_start: data[0].date_time_start,
    date_time_end: data[0].date_time_end,
    sleep_quality: data[0].sleep_quality,
    // durations: data.durations.filter(duration => duration >= 10)
  };
  console.log(data)

  const timestamp1 = filteredData.date_time_start;
  const timestamp2 = filteredData.date_time_end;
  
  console.log(timestamp1)
  console.log(timestamp2)
  

  const date1 = new Date(timestamp1);
  const date2 = new Date(timestamp2);
  
  const colourpoor = 'rgba(210, 34, 45, 0.2)';
  const colourfair = 'rgba(255, 191, 0, 0.2)';
  const colourgood = 'rgba(35, 136, 35, 0.2)';
  const colourexcellent = 'rgba(0, 112, 0, 0.2)';
  const duration = Math.abs(date2 - date1) / (1000 * 60 * 60); 
  console.log(duration)
  const sleepData = {
    labels: filteredData.sleep_quality,
    datasets: [
      {
        label: 'Sleep duration (minutes)',
        data: [3,5,3,4], 
        backgroundColor: [colourpoor, colourfair, colourgood, colourexcellent],
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
        text: `Sleep duration for the day: ${duration} hours`
      }
    }
  });
})
  // .catch(error => console.error('Error fetching exercise data:', error));
//'rgba(255, 206, 86, 0.2)'

    // get sleep data
    // fetch('/api/sleeps')
    //   .then(response => response.json())
    //   .then(data => {
    //     const sleepData = {
    //       labels: data.dates,
    //       datasets: [
    //         {
    //           label: 'Sleep duration (hours)',
    //           data: data.durations,
    //           backgroundColor: 'rgba(255, 206, 86, 0.2)',
    //           borderColor: 'rgba(255, 206, 86, 1)',
    //           borderWidth: 1
    //         }
    //       ]
    //     };
    //     // create a new bar chart for sleep
    //             const sleepChart = new Chart(document.getElementById('sleep-chart'), {
    //       type: 'bar',
    //       data: sleepData,
    //         options: {
    //           scales: {
    //           yAxes: [{
    //           ticks: {
    //           beginAtZero: true
    //           }
    //         }]
    //       }
    //     }
    //   });
    // });

//     fetch('/api/meals')
//   .then(response => response.json())
//   .then(data => { 
//     console.log(data)

//     const labels = data.map(row => row.date_time_start);
//     const values = data.map(row => row.meal_junk);

//     console.log(labels);
//     console.log(values);

//     const mealData = {
//       labels: labels,
//       datasets: [
//         {
//           label: 'Meals',
//           data: values,
//           backgroundColor: 'rgba(255, 99, 132, 0.2)',
//           borderColor: 'rgba(255, 99, 132, 1)',
//           borderWidth: 1
//         }
//       ]
//     };
//     // create a new bar chart for meals
//     const mealChart = new Chart(document.getElementById('meal-chart'), {
//       type: 'bar',
//       data: mealData,
//       options: {
//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero: true
//             }
//           }]
//         }
//       }
//     }); console.log(mealData)
//   });

