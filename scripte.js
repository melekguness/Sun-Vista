const form = document.getElementById('applicationForm');
const successMsg = document.getElementById('successMessage');

form.addEventListener('submit', function(e){
    e.preventDefault();
    successMsg.style.display = 'block';
    form.reset();
});