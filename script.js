document.querySelector('.hambugur').addEventListener('click', function() {
    const navItems = document.querySelector('.smallnavitems');
    navItems.classList.toggle('active'); // Toggle the 'active' class
});

window.addEventListener('resize', function() {
    const navItems = document.querySelector('.smallnavitems');
    if (window.innerWidth > 1016) {
        navItems.classList.remove('active'); // Hide the menu if the screen is wider than 1016px
    }
});

document.querySelectorAll('.tr2').forEach(function(item) {
    item.addEventListener('click', function() {
        const dropdownMenu2 = this.querySelector('.dropdown-menu2');
        
        // Toggle the 'active' class to show/hide the dropdown
        dropdownMenu2.classList.toggle('active');
    });
});
