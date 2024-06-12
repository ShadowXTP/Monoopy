document.querySelectorAll('.av input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        const card = checkbox.closest('.av').querySelector('#avimage');
        if (checkbox.checked) {
            card.classList.add('checked-card');
        } else {
            card.classList.remove('checked-card');
        }
    });
});