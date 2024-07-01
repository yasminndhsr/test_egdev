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

