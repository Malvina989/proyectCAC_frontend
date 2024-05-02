function openNav() {
    document.getElementById("custom-sidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("custom-sidebar").style.width = "0";
}

// Evento para el botón del menú hamburguesa
document.getElementById('sidebarToggle').addEventListener('click', openNav);