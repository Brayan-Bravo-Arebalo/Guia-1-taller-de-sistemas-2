const login = document.getElementById("login");

let usuario;
let password;

valor_usuario = false;
valor_password = false;

const boton = document.querySelector("button")

login.addEventListener("keyup", (e) =>{

    if (e.target.classList == "validaruser"){
        if(e.target.value.length >= 3 && e.target.value.split(" ").length ===1){
            valor_usuario = true;
            usuario = e.target.value;
        } else{
            valor_usuario = false;
        }
    }

    if(e.target.classList == "validarpass"){
        if (e.target.value == false) {
            
        } else {
            valor_usuario = true
        }
    }

})

boton.addEventListener("click",(e)=>{
    if(valor_usuario == false && valor_usuario == false){
        alert("debe ingresar usuario y contraseña")

    }else {
        alert("inicio de sesion correcto")
        
    }
})



