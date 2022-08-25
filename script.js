const holderNameInput=document.querySelector("#holder-name-input");
const holderName=document.querySelector("#holder-name");
const cardNumberInput=document.querySelector("#card-number-input");
const cardNumber=document.querySelector("#card-number");
const month=document.querySelector("#mm");
const year=document.querySelector("#yy");
const date=document.querySelector("#exp");
const cvc=document.querySelector("#cvc")
const cvcInput=document.querySelector("#cvc-input");
const erros=document.querySelectorAll(".error");
const button=document.querySelector("#button");
const form=document.querySelector("#form");
const rightContainer=document.querySelector("#right-container");
const hiddenElements=document.querySelectorAll(".hide");
let b=false;
const nameC=/[1-9]/;
let errorsCheck=[true,true,true,true,true,true];
const nameInput=function(){
    if(nameC.test(holderNameInput.value)){
        erros[0].textContent="Name can't contain numbers";
        errorsCheck[0]=false;
        holderNameInput.style.borderColor="red"
    }else{
        errorsCheck[0]=true;
        holderNameInput.style.borderColor="black"
        erros[0].textContent=""
    holderName.textContent=holderNameInput.value;
}
}
const cardInput=function(){
    if(isNaN(cardNumberInput.value)){
        errorsCheck[1]=false;
        erros[1].textContent="Wrong format.Numbers only"
    }else{
        errorsCheck[1]=true;
        erros[1].textContent=""
    let s=""
for(let i=0;i<cardNumberInput.value.length;i++){
    if((i)%4==0){
        s=s+" ";
    }
    s=s+cardNumberInput.value[i];
}
for(let i=cardNumberInput.value.length;i<16;i++){
    if((i)%4==0){
        s=s+" ";
    }
    s=s+"0"
}
cardNumber.textContent=s;
}
}
const checkM=()=>{
    let mm=month.value;
    let yy=year.value;
    if(yy==""){
        yy="00"
    }else if (yy.length==1){
        yy="0"+yy;
    }
    if(isNaN(mm)){
        errorsCheck[2]=false;
        erros[2].textContent="Numbers only"
    }else if(parseInt(mm)<1||parseInt(mm)>12){
        errorsCheck[3]=false;
        erros[3].textContent="choose a  correct month 1-12"
        
    }else{
        errorsCheck[2]=true;
        errorsCheck[3]=true;
        erros[2].textContent=""
        erros[3].textContent=""
        if(b==false){
            b=true;
        checkY()
        b=false;
    }
        if(mm.length==2){
            date.textContent=mm+"/"+yy;
            
        }else if(mm.length==1){
            date.textContent="0"+mm+"/"+yy;
        }else{
            date.textContent="00/"+yy;
        }
    }
}
const checkY=()=>{
    let mm=month.value;
    let yy=year.value;
    if(mm==""){
        mm="00"
    }else if (mm.length==1){
        mm="0"+mm;
    }
    if(isNaN(yy)){
        errorsCheck[2]=false;
        erros[2].textContent="Numbers only"
    }else if(parseInt(yy)<0||parseInt(yy)>50){
        errorsCheck[4]=false;
        erros[4].textContent="choose a  correct year 00-50"
            
        
    }else{
        errorsCheck[2]=true;
        errorsCheck[4]=true;
        erros[2].textContent=""
        erros[4].textContent=""
        if(b==false){
            b=true;
        checkM()
        b=false;
    }
        if(yy.length==2){
            date.textContent=mm+"/"+yy;
            
        }else if(yy.length==1){
            date.textContent=mm+"/0"+yy;
        }else{
            date.textContent=mm+"/00";
        }
    }
}
const checkCVC=()=>{
    
    if(isNaN(cvcInput.value)){
        errorsCheck[5]=false;
        erros[5].textContent="Numbers only"
    
    }else{
        errorsCheck[5]=true;
        erros[5].textContent="";
       cvc.textContent=cvcInput.value;
    }
    if(cvcInput.value.length==0){
        cvc.textContent="000";
    }
}

holderNameInput.addEventListener("keyup",nameInput);
cardNumberInput.addEventListener("keyup",cardInput);
month.addEventListener("keyup",checkM);
year.addEventListener("keyup",checkY);
cvcInput.addEventListener("keyup",checkCVC)
form.addEventListener("submit",function(event) {
    event.preventDefault();
    let b=true;
    for(let i=0;i<errorsCheck.length;i++){
        b=b&&errorsCheck[i];
    }
    if(b==true){
    form.style.display="none";
    rightContainer.classList.add("hidden-content")
    for(let i=0;i<hiddenElements.length;i++){
        hiddenElements[i].classList.remove("hide");
    }}else{
        alert("please fill the form correctly")
    }
  })
