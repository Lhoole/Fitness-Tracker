const newFormHandler = async (event) => {
    event.preventDefault();
  
    const meal_name = document.querySelector('#meal-name').value.trim();
    const meal_junk = document.querySelector('#meal-junk').value.trim();
    const date_time_start = document.querySelector('#meal-start').value.trim();
    
  
    if (meal_name && meal_junk && date_time_start) {
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
  

const isTicked = document.querySelector('#meal-junk');

const junkTick = ('change', ()  => {

  if(junkTick.isTicked){
    return true
  }else{
    return false
  }
});
  
  document
    .querySelector('.new-meal-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.meal-list')
    .addEventListener('click', delButtonHandler);

  document
    .querySelector('#meal-junk-checkbox')
    .addEventListener('submit', junkTick);


  
// const junkCheckBox = document.querySelector('#meal-junk-checkbox');

// const isTicked = document.querySelector('#meal-junk');


// junkCheckBox.addEventListener('change', () => {
//   if (junkCheckBox.isTicked) {
//     return true;
//   } else {
//     return false
//   }
// });