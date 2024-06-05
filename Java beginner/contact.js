const submitBtn = document.getElementById('submitBtn');
const popupBtn = document.getElementsByClassName('popup');
const formBtn = document.getElementById('form');
const NameID = document.getElementById("Name")
const emailId = document.getElementById('Email')
const query = document.getElementById('query');

// let form = postMessage


if (NameID && emailId) {
    popupBtn[0].style.display = 'block';
}else if (NameID && emailId) {
    popupBtn[1].style.display = 'none';
}else {
    alert("Please fill the following fields")
}

// formBtn.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const NameID = NameID.value;
//     const emailId = emailId.value;
//     const query = query.value;
//     const isEmpty =[...submitBtn.value()];

//     if (isEmpty) {
//         alert("please fill the form")
//     } else {
//         popupBtn[0].style.display = 'block';
//     }
// })

submitBtn.addEventListener('click', () => {
    e.preventDefault();
    const NameID = NameID.value;
    const emailId = emailId.value;
    const query = query.value;
    // const isEmpty =[...submitBtn.value()];

    if (isEmpty) {
        alert("please fill the form")
    } else {
        popupBtn[0].style.display = 'block';
    }
});

popupBtn[0].addEventListener('click', () => {
  popupBtn[0].style.display = 'none';
});

console.error(popupBtn)
// const submitBtn = document.getElementById('submitBtn'); // Replace with your form ID
// const popup = document.getElementsByClassName('popup'); // Replace with your popup element ID

// submitBtn.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const submitBtnData = new submitBtnData(submitBtn);
//   const isEmpty = [...submitBtnData.values()].some(value => value === '');

//   if (isEmpty) {
//     alert('Please fill out the entire form!');
//   } else {
//     popup.style.display = 'block';
//   }
// });
