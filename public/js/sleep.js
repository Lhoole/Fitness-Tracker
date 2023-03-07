const newFormHandler = async (event) => {
    event.preventDefault();
  
    const sleep_quality = document.querySelector('#quality-of-sleep').value.trim();
    const date_time_start = document.querySelector('#sleep-start').value.trim();
    const date_time_end = document.querySelector('#sleep-end').value.trim();
  
    if (sleep_quality && date_time_start && date_time_end) {
      const response = await fetch(`/api/sleeps`, {
        method: 'POST',
        body: JSON.stringify({ sleep_quality, date_time_start, date_time_end }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/sleeps');
      } else {
        alert('Failed to create project');
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/sleeps/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/sleeps');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  

  document
  .querySelector('.new-sleeps-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('.sleeps-list')
  .addEventListener('click', delButtonHandler);