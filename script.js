function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function validate() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var content = document.getElementById('content').value;

  if (name === '') {
    alert("Please enter your name");
    document.myForm.name.focus();
    return false;
  }
  if (email === '') {
    alert("Please enter your email");
    document.myForm.email.focus();
    return false;
  }
  if (content === '') {
    alert("Please type something");
    document.myForm.content.focus();
    return false;
  }

  return true;
}
