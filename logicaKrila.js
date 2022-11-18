let check=document.querySelector(".check");
check.addEventListener('click',idioma)

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="./indexKrilaEN.html";
    }else{
        location.href="./indexKrilaES.html";
    }
}