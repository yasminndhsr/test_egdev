let data ={}

function handleInput(e, index){
    
}

function login(){
    const data = {
        username: document.getElementsByName('username')[0].value,
        password: document.getElementsByName('password')[0].value
    }
    console.log (data);
    fetch("http://192.168.18.12:3000/login",{
        method: "POST",
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    }). then(res => res.json()).then(hasil => {
        if(hasil.status){
            window.location = "/index.html"
        }else{
            alert(hasil.msg)
        }
    })
}