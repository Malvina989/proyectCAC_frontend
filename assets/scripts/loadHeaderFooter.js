// loadHeaderFooter.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('../components/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header').innerHTML = html;
        })
        .catch(err => console.error('Failed to load header: ', err));

    fetch('../components/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer').innerHTML = html;
        })
        .catch(err => console.error('Failed to load footer: ', err));
});
