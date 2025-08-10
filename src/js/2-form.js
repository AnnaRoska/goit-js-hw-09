let formData =
{
    email: "",
    message: ""
}
const form = document.querySelector(".feedback-form");
const STORAGE_KEY = 'feedback-form-state';


form.addEventListener('input', (e) => {
formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
}
)

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  try {
    formData = JSON.parse(saved);
    form.email.value = formData.email;
    form.message.value = formData.message;
  } catch (error) {
    console.error('Error parsing saved form data:', error);
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email.trim() === "" || formData.message.trim() === "") {
    alert("Fill please all fields");
    return;
  }

  console.log("Submitted formData:", formData);

  localStorage.removeItem(STORAGE_KEY);
  formData.email = "";
  formData.message = "";
  form.reset();
});
