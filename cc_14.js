// Task 2: Support Tickets Dynamic Addition
function createSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticket = document.createElement('div');
    ticket.setAttribute('class', 'ticket');

    // Added the customer name to the ticket.
    const nameHeading = document.createElement('h2');
    nameHeading.textContent = customerName;

    // Adds the issue description.
    const issueDesc = document.createElement('p');
    issueDesc.textContent = issueDescription;

    // Added priority level
    const priorityLvl = document.createElement('span');
    priorityLvl.textContent = `Priority: ${priorityLevel}`;
    priorityLvl.setAttribute('class', 'priority');

    // Add Resolve button
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-button');

// Task 4: Support Ticket Resolution with Event Bubbling
    resolveButton.addEventListener('click', function(event) {
        ticketContainer.removeChild(ticket); // removing ticket fron container
        event.stopPropagation();
    }); // Added event listener to the resolve button.

    ticket.appendChild(nameHeading);
    ticket.appendChild(issueDesc);
    ticket.appendChild(priorityLvl);
    ticket.appendChild(resolveButton);

    // Appends the ticket to the ticketContainer.
    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.appendChild(ticket);
// Task 4 cont.
    ticketContainer.addEventListener('click', function() {
        console.log('A ticket had been clicked.');
    }); // Added event listener to the ticket container.
}

// Created the support tickets.:
createSupportTicket('Tom Kirkman', 'Unable to login to the system.', 'High');
createSupportTicket('Aaron Shore', 'Payment not processed.', 'Extreme');

// Task 3: Highlighting High Priority Tickets
function highlightHighPriorityTickets() {
    const highPriorityTickets = document.querySelectorAll('.high');
    const hpTicketArray = Array.from(highPriorityTickets);
    
    hpTicketArray.forEach(ticket => {
        ticket.style.backgroundColor = 'teal';
        ticket.style.border = '4px solid black';
        ticket.style.display = 'inline-block';
        ticket.style.padding = '5px';
        ticket.style.margin = '5px';
    });
}; // Created a function to highlight high priority tickets.

highlightHighPriorityTickets();