//java comment

async function fetchTickets() {
    const errorMessageDiv = document.getElementById('error-message');
    const ticketContainer = document.getElementById('ticket-container');
    
    try {
        ticketContainer.innerHTML = 'Awaiting response';

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        
        if (!response.ok) {
            throw new Error('Response was not ok'); //checks if response is ok
        }

        const tickets = await response.json();

        if (tickets.length === 0) { //checks if tickets are found if not throws a custom message
            throw new Error('No tickets found');
        }

     catch (error) {
        errorMessageDiv.textContent = `Error: ${error.message}`;
        errorMessageDiv.style.display = 'block';
    }
}