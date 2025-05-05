document.addEventListener('DOMContentLoaded', function () {
    // Theme Toggle Functionality
    const toggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = toggleButton.querySelector('i');

    // Function to update icon and theme based on dark mode state
    function updateTheme(isDark) {
        if (isDark) {
            htmlElement.classList.add('dark');
            htmlElement.classList.remove('light');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            icon.classList.remove('text-gray-900');
            icon.classList.add('text-yellow-400');
        } else {
            htmlElement.classList.remove('dark');
            htmlElement.classList.add('light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            icon.classList.remove('text-yellow-400');
            icon.classList.add('text-gray-900');
        }
    }

    // Set initial theme to light mode
    updateTheme(false);
    localStorage.setItem('theme', 'light');

    // Theme toggle click handler
    toggleButton.addEventListener('click', function () {
        const isCurrentlyDark = htmlElement.classList.contains('dark');
        localStorage.setItem('theme', isCurrentlyDark ? 'light' : 'dark');
        updateTheme(!isCurrentlyDark);
    });

    // Modal Functionality
    const calculatorForm = document.getElementById('calculatorForm');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const deleteBtn = document.getElementById('deleteBtn');
    const editBtn = document.getElementById('editBtn');
    const modalContent = document.querySelector('.modal-content');

    // Function to show modal with animation
    function showModal() {
        successModal.classList.remove('hidden');
        // Add animation classes
        modalContent.classList.add('modal-enter');
        modalContent.classList.remove('modal-leave');
    }

    // Function to hide modal with animation
    function hideModal() {
        modalContent.classList.remove('modal-enter');
        modalContent.classList.add('modal-leave');
        // Wait for animation to complete before hiding
        setTimeout(() => {
            successModal.classList.add('hidden');
        }, 300);
    }

    // Show modal on form submit
    calculatorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showModal();
    });

    // Close modal on button clicks
    [closeModalBtn, modalCloseBtn, deleteBtn, editBtn].forEach(btn => {
        btn.addEventListener('click', hideModal);
    });

    // Close modal when clicking outside
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            hideModal();
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !successModal.classList.contains('hidden')) {
            hideModal();
        }
    });

    // Prevent modal content clicks from closing the modal
    modalContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
