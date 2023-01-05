created_password = document.querySelector(".final_password");

btn = document.querySelector(".submit");
copyToClipboird = document.querySelector("img");

function generatePassword() {
  password_length = document.querySelector(".number").value;

  pass = "";
  lowercases = "azertyuiopqsdfghjklmwxcvbn";
  upperceses = "AZERTYUIOPQSDFGHJKLMWXCVNB";
  symbols = "²&é{#[|`\\^@]})=+-";
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (i = 0; i <= password_length; i++) {
    pass +=
      lowercases.charAt(Math.ceil(Math.random() * lowercases.length)) +
      upperceses.charAt(Math.ceil(Math.random() * upperceses.length)) +
      symbols.charAt(Math.ceil(Math.random() * symbols.length)) +
      Math.ceil(Math.random() * numbers.length);
  }

  final_password = pass.slice(0, password_length);
  created_password.innerHTML = final_password;
}
btn.addEventListener("click", generatePassword);

copyToClipboird.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = created_password.innerText;

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
});
