document.querySelector('#myForm').addEventListener('submit', handleSubmit)

async function handleSubmit (event) {
  event.preventDefault() 

  const form = event.target 
  const formData = new FormData(form) 

  formData.append('firstname', 'umakant');
  formData.append('lastname', 'bhendarkar')


  for (let data of formData.entries()) {
    console.log(data)
  }

//   formData.forEach((key, value) => {
//     console.log(key, value)
//   })

 

  

  
//   try {
//     const response = await fetch('/submit', {
//       method: 'POST',
//       body: formData // Send FormData as the request body
//     })

//     if (!response.ok) {
//       throw new Error('Form submission failed')
//     }

//     const result = await response.json() // Assume JSON response
//     console.log('Form submitted successfully:', result)
//     alert('Form submitted successfully!')
//   } catch (error) {
//     console.error('Error submitting form:', error)
//     alert('There was an error submitting the form. Please try again.')
//   }
}
