function solve() {
    const label = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let stop = {
        next: 'depot'
    };

    async function depart() {
        departBtn.disabled = true;

        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        const response = await fetch(url);
        const data = await response.json();

        stop = data;

        label.textContent = `Next stop ${data.name}`;

        arriveBtn.disabled = false;
    }

    function arrive() {
        label.textContent = `Arriving at ${stop.name}`;
        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();