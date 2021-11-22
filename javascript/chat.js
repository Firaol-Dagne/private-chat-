const form = document.querySelector(".typing-area"),
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");

form.onsubmit = (e) => {
    e.preventDefault(); //preventing form from submitting
}

sendBtn .onclick = ()=>{
     //let start Ajax
     let xhr = new XMLHttpRequest(); //Creating XML object
     xhr.open("POST", "php/insert-chat.php", true);
     xhr.onload = ()=>{
         if(xhr.readyState === XMLHttpRequest.DONE){
             if(xhr.status === 200){
                 inputField.value = "";
                 scrollToBottom();
                
             }
         }
     }
     // we have to send the form data through ajax to php
     let fromData = new FormData(form); // creating new formData object
     xhr.send(fromData); // sending the formData to php
}
chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active");
}
chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active");
}

setInterval(() =>{
    //let start Ajax
    let xhr = new XMLHttpRequest(); //Creating XML object
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                chatBox.innerHTML = data;
                if(chatBox.classList.contains("active")){
                    scrollToBottom();
                }
            }
        }
    }

   // we have to send the form data through ajax to php
   let fromData = new FormData(form); // creating new formData object
   xhr.send(fromData); // sending the formData to php
   }, 500);

   function scrollToBottom(){
       chatBox.scrollTop = chatBox.scrollHeight;
   }