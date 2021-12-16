function attachEvents() {
    document.getElementById('submit').addEventListener('click', onCreate);
    getAllStudens();
}

const tableBody = document.querySelector('#results tbody');
const firstNameInput = document.querySelector('.inputs input[name="firstName"]');
const lastNameInput = document.querySelector('.inputs input[name="lastName"]');
const facultyNumberInput = document.querySelector('.inputs input[name="facultyNumber"]');
const gradeInput = document.querySelector('.inputs input[name="grade"]');

attachEvents();

async function onCreate(event) {
    event.preventDefault();
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const facultyNumber = facultyNumberInput.value;
    const grade = gradeInput.value;

    const student = {
        firstName,
        lastName,
        facultyNumber,
        grade
    };

    await addStudent(student);
    await getAllStudens();
}

async function addStudent(student) {
    const url = 'http://localhost:3030/jsonstore/collections/students';
    const options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    };

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
}

async function getAllStudens() {
    const url = 'http://localhost:3030/jsonstore/collections/students';

    const response = await fetch(url);
    const data = await response.json();

    tableBody.replaceChildren();
    Object.values(data).map(createItem).forEach(i => tableBody.appendChild(i));
}

function createItem(student) {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = student.lastName;

    const facultyNumberCell = document.createElement('td');
    facultyNumberCell.textContent = student.facultyNumber;

    const gradeCell = document.createElement('td');
    gradeCell.textContent = student.grade;

    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(facultyNumberCell);
    row.appendChild(gradeCell);

    return row;
}