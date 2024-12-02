function dataform(){
    window.open('form html.html','_blank');
};
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const skill = document.getElementById('mobile').value;
    const userData = { name, email, skill };
    localStorage.setItem('user', JSON.stringify(userData));
    alert('Form data saved successfully!');
    this.reset();
});
