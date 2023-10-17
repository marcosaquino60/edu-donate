const donationData = [
    { date: '2023-09-01', value: 100.00},
    { date: '2023-08-15', value: 50.00},
    { date: '2023-07-22', value: 75.00},
    //add
];

function populateDonationHistory() {
    const donationHistoryList = document.getElementById('donationHistoryList');

    donationData.forEach((donation) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${donation.date}</td>
            <td>$${donation.value.toFixed(2)}</td>
        `;

        donationHistoryList.appendChild(row);
    });
}
window.addEventListener('load', populateDonationHistory);