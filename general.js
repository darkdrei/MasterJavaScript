var saludar = new Promise((resolved, reject)=>{
    setTimeout(()=>{
        let saludo= "Hola muy buenas a todos.";

        if(saludo){
            resolved(saludo);
        }else{
            reject('No hay saludo definido');
        }
    }, 2000);
});

saludar.then(resultado =>{
    alert(resultado);
}).catch(error =>{
    alert(error);
});