//Input Box 1
const dropArea = document.querySelector('#dropArea');
const fileInput = document.querySelector('#fileInput');
const fileList = document.querySelector('#fileList');

dropArea.addEventListener('dragover', (e) => {
 e.preventDefault();
 dropArea.classList.add('dragover');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('dragover');
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    fileInput.files = files;

    fileList.innerHTML = '';
    for (let i = 0; i < files.length; i++) {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.textContent = files[i].name;
        fileList.appendChild(fileItem);
    }

});

//Input Box 2
const dropArea2 = document.querySelector('#dropArea2');
const fileInput2 = document.querySelector('#fileInput2');
const fileList2 = document.querySelector('#fileList2');

dropArea2.addEventListener('dragover', (e) => {
 e.preventDefault();
 dropArea2.classList.add('dragover');
});

dropArea2.addEventListener('dragleave', () => {
    dropArea2.classList.remove('dragover');
});

dropArea2.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea2.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    fileInput2.files = files;

    fileList2.innerHTML = '';
    for (let i = 0; i < files.length; i++) {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.textContent = files[i].name;
        fileList2.appendChild(fileItem);
    }

});


function parafrase(){
    const data = {
        
        file: document.getElementsByName('file')[0].value,
        file2: document.getElementsByName('file2')[0].value,
        waktu: document.getElementsByName('waktu')[0].value,
        persen: document.getElementsByName('persen')[0].value,
        WhatsApp: document.getElementsByName('WhatsApp')[0].value,
        catatan: document.getElementsByName('catatan')[0].value,

    }
    console.log (data);
    fetch("http://192.168.18.12:3000/parafrase",{
        method: "POST",
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    }). then(res => res.json()).then(hasil => {
        if(hasil.status){
            alert(hasil.msg)
        }else{
            
        }
    })
}