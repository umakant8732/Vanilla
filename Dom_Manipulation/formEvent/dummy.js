document.querySelector('#myForm').addEventListener('submit', handleSubmit)

async function handleSubmit (event) {
  event.preventDefault() 

  const form = event.target 
  const formData = new FormData(form)
  
  // Get the file input field and add the image to formData
  const fileInput = document.querySelector('#fileInput')
  if (fileInput.files.length > 0) {
    formData.append('profilePicture', fileInput.files[0]) // Add the image file to FormData
  }

  // Add additional data manually, if needed
  formData.append('extraField', 'someExtraValue') // Example of manually appending extra data

  // Optional: Log all form data for debugging
  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value)
  }

  try {
    const response = await fetch('/submit', {
      method: 'POST',
      body: formData // Send FormData as the request body
    })

    if (!response.ok) {
      throw new Error('Form submission failed')
    }

    const result = await response.json() // Assume JSON response
    console.log('Form submitted successfully:', result)
    alert('Form submitted successfully!')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error submitting the form. Please try again.')
  }
}
