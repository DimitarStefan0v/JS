async function getInfo() {
    const busStop = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const ul = document.getElementById('buses');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${busStop}`;

    try {
        const response = await fetch(url);
        if (response.status != 200) {
            throw new Error('Error');
        }

        const data = await response.json();
        stopName.textContent = data.name;
        const buses = Object.entries(data.buses);
        ul.innerHTML = '';
        for (let bus of buses) {
            const li = document.createElement('li');
            li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            ul.appendChild(li);
        }
    } catch (error) {
        ul.innerHTML = '';
        stopName.textContent = error.message;
    }
}