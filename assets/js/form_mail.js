document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  form.addEventListener('submit', (event) => {
    // prevent the form submit from refreshing the page
    event.preventDefault();

    const { name, email, phone, message } = event.target;

    // Use your API endpoint URL you copied from the previous step
    //const endpoint = "https://eznzqs6h18.execute-api.eu-north-1.amazonaws.com/default/sendOfferte";
    
    // We use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
      senderName: name.value,
      senderEmail: email.value,
      phone: phone.value,
      message: message.value
    });

    const requestOptions = {
      method: "POST",
      body
    };

    fetch(endpoint, requestOptions)
    .then((response) => {
       if (!response.ok) throw new Error("Error in fetch");
       return response.json();
    })
    .then((response) => {
       document.getElementById("result-text").innerText = "Email sent successfully!";
    })
    .catch((error) => {
       document.getElementById("result-text").innerText = "An unknown error occurred.";
    })
    .finally(() => {
       // Reset the form fields regardless of success or failure
       form.reset();
    });
 
  });
});