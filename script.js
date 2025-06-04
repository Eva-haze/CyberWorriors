const form = document.getElementById("regForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const role = document.getElementById("role");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Проверка: все поля обязательны
  if (
    name.value.trim() === "" ||
    email.value.trim() === "" ||
    password.value.trim() === "" ||
    confirmPassword.value.trim() === "" ||
    role.value.trim() === ""
  ) {
    message.innerText = "Пожалуйста, заполните все поля!";
    message.style.background = "#ff4d4d";
    message.style.color = "white";
    return;
  }

  // Проверка email
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email.value)) {
    message.innerText = "Неверный формат email!";
    message.style.background = "#ff4d4d";
    message.style.color = "white";
    return;
  }

  // Проверка длины пароля
  if (password.value.length < 6) {
    message.innerText = "Пароль должен содержать минимум 6 символов!";
    message.style.background = "#ff4d4d";
    message.style.color = "white";
    return;
  }

  // Проверка совпадения паролей
  if (password.value !== confirmPassword.value) {
    message.innerText = "Пароли не совпадают!";
    message.style.background = "#ff4d4d";
    message.style.color = "white";
    return;
  }

  // Если всё хорошо
  message.innerText = "Регистрация успешна!";
  message.style.background = "#4CAF50";
  message.style.color = "white";
  form.reset();
});
