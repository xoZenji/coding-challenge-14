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

    ticket.appendChild(nameHeading);
    ticket.appendChild(issueDesc);
    ticket.appendChild(priorityLvl);
    ticket.appendChild(resolveButton);

    // Appends the ticket to the ticketContainer.
    document.getElementById('ticketContainer')
    ticketContainer.appendChild(ticket);
}

// Created the support tickets.:
createSupportTicket('Tom Kirkman', 'Unable to login to the system.', 'High');
createSupportTicket('Aaron Shore', 'Payment not processed.', 'Extreme');