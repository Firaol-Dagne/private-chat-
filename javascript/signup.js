const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-txt");

form.onsubmit = (e) => {
    e.preventDefault(); //preventing form from submitting
}
continueBtn.onclick = ()=> {
    //let start Ajax
    let xhr = new XMLHttpRequest(); //Creating XML object
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                if(data == "success"){
                    location.href = "users.php";
                }
                else{
                    errorText.textContent = data;
                    errorText.style.display = "block";
                }
            }
        }
    }
    // we have to send the form data through ajax to php
    let fromData = new FormData(form); // creating new formData object
    xhr.send(fromData); // sending the formData to php
}