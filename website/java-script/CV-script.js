// CV form page javascript file

const fileInput = document.getElementById('file');
const progressCVuploading = document.querySelector('.progressCV-uploading');
const progress = document.getElementById('progress');
const progressbarCVpercent = document.querySelector('.progressbarCVpercent');
const submitButton = document.querySelector('.btnCV')
let uploadedFilePath = null;
let shouldSubmitForm = false;
const progressCVuploaded = document.querySelector('.progressCV-uploaded');
const fileCVname = document.querySelector('.fileCVname');
const fileCVnameUploaded = document.querySelector('.fileCVnameUploaded');
var btn_show = document.querySelector('.collaps-btn');
var text_hidden = document.querySelector('.hidden');
var btn_hide = document.querySelector('.collaps-btn-1');


// buttons to hide and show RODO text

btn_show.addEventListener('click', (event) => {
    event.preventDefault();
    text_hidden.style.display = 'block';
    btn_show.style.display = 'none';
    btn_hide.style.display = 'inline';
});

btn_hide.addEventListener('click', (event) =>{
    text_hidden.style.display = 'none';
    btn_show.style.display = 'inline';
    btn_hide.style.display = 'none';
})

// buttons to hide and show RODO text END


// show saved offer from offers.html in CV.html

const selectedJob = localStorage.getItem("selectedJob");
if (selectedJob) {
    const CVoffer = document.querySelector(".CV-offer");
    CVoffer.innerHTML = `${selectedJob}`;

    // Update the value of a hidden selectedJobInput field
    // Information about selectedJob will be send in email
    const selectedJobInput = document.getElementById("selectedJobInput");
    selectedJobInput.value = selectedJob;
}

// show saved offer from offers.html in CV.html END

// adding file input instructions
//it triggers when file is selected

fileInput.addEventListener('change', function () {
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('fileCV', file);
        const xhr = new XMLHttpRequest();

        // when the file is selected, display the DIV for uploading and hide the DIV for uploaded
        xhr.upload.addEventListener('loadstart', function () {
            progressCVuploading.style.display = 'flex';
            progressCVuploaded.style.display = 'none';
        });

        // Instructions for the progress bar
        xhr.upload.addEventListener('progress', function (event) {
            if (event.lengthComputable) {
                progressCVuploading.style.display = 'flex';
                fileCVname.textContent = `${file.name}`;
                const percent = (event.loaded / event.total) * 100;
                progress.value = percent;
                progressbarCVpercent.textContent = percent.toFixed(2) + '%';
                if (percent === 100) {
                    progressCVuploading.style.display = 'none';
                    progressCVuploaded.style.display = 'flex';
                    fileCVnameUploaded.textContent = `${file.name}`;
                }
            }
        });

        // Handle the response from the server
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // File uploaded successfully
                    console.log('File uploaded successfully');
                } else {
                    // Handle errors, e.g., display an error message to the user
                    console.error('Error uploading file. Server response:', xhr.status, xhr.statusText);
                }
            }
        };

        // POST request, send the file to '/uploads' (server endpoint for file uploads)
        // send formData with the selected file
        xhr.open('POST', '/uploads', true);
        xhr.send(formData);
    }
});

  // adding file input instructions END



