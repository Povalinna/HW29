
function fromForm() {

  document.getElementById('mainForm').style.display = `none`;
  document.getElementById(`result`).style.display = `block`;

  let firstname = document.getElementById('firstname').value;
  let lastname = document.getElementById('lastname').value;
  let birth = document.getElementById(`datBirth`).value;

  let gender = document.getElementsByTagName('input');
  let value;
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].type === 'radio' && gender[i].checked && gender[i].name === 'gender') {
      value = gender[i].value;
    }
  }
  let city = document.getElementById(`city`).value;
  let adress = document.getElementById(`adress`).value;

  let langMass = [];
  let checkboxes = document.getElementsByClassName('lang');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      langMass.push(checkboxes[i].value);
    }
  }

  let result = `Your name` + ' ' + firstname + `</br>` +
    `Your last name` + ` ` + lastname + `</br>` +
    `The date of your birthday` + ` ` + birth + `</br>` +
    `gender` + ` ` + value + `</br>` +
    `Your city ` + ` ` + city + `</br>` +
    `Your adress` + ` ` + adress + `</br>` +
    `Your speak :` + ` ` + langMass;


  document.getElementById(`output`).innerHTML = result;

}
function goBack() {
  document.getElementById(`result`).style.display = `none`;
  document.getElementById(`mainForm`).style.display = `block`;
}








