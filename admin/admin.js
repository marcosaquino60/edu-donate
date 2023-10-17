const currentUserData = [
    { name: 'Joao', email: 'joao@example.com', cpf: '123.456.789-00' },
    { name: 'Maria', email: 'maria@example.com', cpf: '987.654.321-00' },
    { name: 'Alice', email: 'alice@example.com', cpf: '456.789.123-00' },
    { name: 'Bob', email: 'bob@example.com', cpf: '789.123.456-00' },
    // Add 
];

const donationData = [
    { date: '2023-09-01', value: 100.00, cpf: '123.456.789-00' },
    { date: '2023-09-01', value: 800.00, cpf: '123.456.789-00' },
    { date: '2023-08-15', value: 50.00, cpf: '987.654.321-00' },
    { date: '2023-07-22', value: 75.00, cpf: '456.789.123-00' },
    
    // Add
];

function populateCurrentUsers() {
    const currentUsersTable = document.getElementById('currentUsersTable');
    currentUsersTable.innerHTML = '';

    currentUserData.forEach((user) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.cpf}</td>
            <td><button class="btn btn-danger btn-sm" onclick="banUser('${user.cpf}')">Ban</button></td> <!-- Add a button for banning -->
        `;

        currentUsersTable.appendChild(row);
    });
}

function banUser(cpf) {
    // Encontre o índice do usuário com base no CPF
    const userIndex = currentUserData.findIndex((user) => user.cpf === cpf);

    // Se o usuário com o CPF especificado foi encontrado
    if (userIndex !== -1) {
        // Remova o usuário da lista
        currentUserData.splice(userIndex, 1);

        // Atualize a tabela para refletir as alterações
        populateCurrentUsers();
    }
}

function searchUserByName() {
    const nameToFind = document.getElementById('nameSearch').value.toLowerCase();
    const currentUsersTable = document.getElementById('currentUsersTable');

    currentUsersTable.innerHTML = '';

    const foundUsers = currentUserData.filter((user) => user.name.toLowerCase().includes(nameToFind));

    if (foundUsers.length > 0) {
        foundUsers.forEach((foundUser) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${foundUser.name}</td>
                <td>${foundUser.email}</td>
                <td>${foundUser.cpf}</td>
            `;

            currentUsersTable.appendChild(row);
        });
    } else {
        currentUsersTable.innerHTML = '<tr><td colspan="3">No users found</td></tr>';
    }
}

function showAllUsers() {
    populateCurrentUsers();
}

function populateDonationHistory() {
    const donationHistoryList = document.getElementById('donationHistoryList');

    donationData.forEach((donation) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${donation.date}</td>
            <td>$${donation.value.toFixed(2)}</td>
            <td>${donation.cpf}</td>
        `;

        donationHistoryList.appendChild(row);
    });
}

function searchDonation() {
    const searchInput = document.getElementById('search').value;
    const donationHistoryList = document.getElementById('donationHistoryList');

    donationHistoryList.innerHTML = '';

    const filteredDonations = donationData.filter((donation) => {
        return donation.cpf.includes(searchInput);
    });

    filteredDonations.forEach((donation) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${donation.date}</td>
            <td>$${donation.value.toFixed(2)}</td>
            <td>${donation.cpf}</td>
        `;

        donationHistoryList.appendChild(row);
    });
}

function showAllDonations() {
    populateDonationHistory();
}