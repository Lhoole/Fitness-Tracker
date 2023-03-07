const newFormHandler = async (event) => {
    event.preventDefault();
  
    const exercise_name = document.querySelector('#exercise-name').value.trim();
    const date_time_start = document.querySelector('#exercise-start').value.trim();
    const date_time_end = document.querySelector('#exercise-end').value.trim();
  
    if (exercise_name && date_time_start && date_time_end) {
      const response = await fetch(`/api/exercises`, {
        method: 'POST',
        body: JSON.stringify({ exercise_name, date_time_start, date_time_end }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/exercises');
      } else {
        alert('Failed to log exercise');
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/exercises/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/exercises');
      } else {
        alert('Failed to delete exercise entry');
      }
    }
  };
  

  document
  .querySelector('.new-exercise-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('.exercise-list')
  .addEventListener('click', delButtonHandler);