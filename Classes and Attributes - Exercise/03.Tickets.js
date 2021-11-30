function manageTickets(tickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const ticketsObj = [];

    tickets.forEach((entry) => {
        let [destination, price, status] = entry.split('|');
        price = Number(price);
        ticketsObj.push(new Ticket(destination, price, status));
    });

    const sortMapper
     = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status)
    };

    return ticketsObj.sort(sortMapper
        [criteria]);
}

console.log(manageTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'));

console.log(manageTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'));