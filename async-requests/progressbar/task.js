const progress = document.getElementById("progress");
const form = document.getElementById("form");
let xhr = new XMLHttpRequest();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");

  xhr.upload.onprogress = (el) => {
    progress.value = el.loaded / el.total;
  };
  
  xhr.send(formData);
  xhr.upload.onload = () => {
    alert(`done`);
  };
});