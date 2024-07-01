
function cekTurnitin(){
    const data = {
        
        file: document.getElementsByName('file')[0].value,
        kutipan: document.getElementsByName('kutipan')[0].checked,
        daftarPustaka: document.getElementsByName('daftar-pustaka')[0].checked,
        sumber: document.getElementsByName('sumber')[0].checked,
        WhatsApp: document.getElementsByName('WhatsApp')[0].value,
        promo: document.getElementsByName('promo')[0].checked,
        referral: document.getElementsByName('referral')[0].value,



    }
    console.log (data);
    fetch("http://192.168.18.12:3000/cek-turnitin",{
        method: "POST",
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    }). then(res => res.json()).then(hasil => {
        if(hasil.status){
            window.location = "/cek-turnitin.html"
        }else{
            alert(hasil.msg)
        }
    })
}