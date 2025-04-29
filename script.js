document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = ''; // Clear previous file list

    for (let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i];
        const listItem = document.createElement('div');
        listItem.textContent = file.name;
        fileList.appendChild(listItem);
    }
});
