const newFormHandler = async (event) => {
    event.preventDefault();
  
    const exercise = document.querySelector('#exercise-name').value.trim();
    const start = document.querySelector('#exercise-start').value.trim();
    const end = document.querySelector('#exercise-end').value.trim();
  
    if (exercise && start && end) {
      const response = await fetch(`/api/exercises`, {
        method: 'POST',
        body: JSON.stringify({ exercise, start, end }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/exercises');
      } else {
        alert('Failed to create project');
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
        alert('Failed to delete project');
      }
    }
  };
  

  document
  .querySelector('.new-exercise-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('.exercise-list')
  .addEventListener('click', delButtonHandler);