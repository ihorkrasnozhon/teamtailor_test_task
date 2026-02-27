document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const tableScreen = document.getElementById('table-screen');
    const fetchBtn = document.getElementById('fetch-btn');
    const backBtn = document.getElementById('back-btn');
    const tableBody = document.getElementById('table-body');

    fetchBtn.addEventListener('click', async () => {
        welcomeScreen.classList.add('hidden');
        tableScreen.classList.remove('hidden');

        try {
            const response = await fetch('http://localhost:3000/candidates-with-applications');
            const data = await response.json();

            tableBody.innerHTML = data.map(item => `
                <tr>
                    <td>${item.id}</td>
                    <td><strong>${item.first_name} ${item.last_name}</strong></td>
                    <td>${item.email}</td>
                    <td style="font-family: monospace;"><strong>${item.applicationId || '—'}</strong></td>
                    <td style="color: #999;">${item.applicationCreatedAt ? new Date(item.applicationCreatedAt).toLocaleDateString() : '—'}</td>
                </tr>
            `).join('');

            setTimeout(() => {
                window.location.href = 'http://localhost:3000/export-candidates-csv';
            }, 800);


        } catch (error) {
            console.error('Ошибка:', error);
            alert('Unable to download data.');
            location.reload();
        }
    });

    backBtn.addEventListener('click', () => {
        location.reload();
    });
});
