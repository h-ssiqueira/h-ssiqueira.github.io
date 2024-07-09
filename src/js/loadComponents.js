function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (elementId === 'contact') {
                document.getElementById('currYear').textContent = new Date().getFullYear();
            }
        });
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('../html/header.html', 'header');
    loadComponent('../html/footer.html', 'contact');
});
