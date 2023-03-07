const newFormHandler = async (event) => {
    event.preventDefault();
  
    const meal = document.querySelector('#meal-name').value.trim();
    const junkmeal = document.querySelector('#meal-junk').value.trim();
    const start = document.querySelector('#meal-start').value.trim();
  
    if (meal && junkmeal && start) {
      const response = await fetch(`/api/meals`, {
        method: 'POST',
        body: JSON.stringify({ meal_name, meal_junk, date_time_start}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/meals');
      } else {
        alert('Failed to generate Meal entry');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/meals/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/meals');
      } else {
        alert('Failed to delete Meal entry');
      }
    }
  };
  
  document
    .querySelector('.new-meal-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.meal-list')
    .addEventListener('click', delButtonHandler);