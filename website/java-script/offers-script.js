import * as i18next from 'https://cdn.skypack.dev/i18next@21';

// 'jobs' array contains objects with information about different job positions
export const jobs = [
    {
        
        title: "Mechanik/technik linii produkcyjnej",
        location: "Gorzów Wielkopolski, Szczecin",
        salary: "PLN 4000-8000",
        contract: "Umowa o pracę",
        jobType: "Praca tymczasowa",
        workingTime: "Pełen etat",
        jobText: "<my-job-text></my-job-text>", //load text from text_html.js
        
    },

    {
        title: "Pomocnik mechanika",
        location: "Gorzów Wielkopolski",
        salary: "PLN 3600",
        contract: "Umowa o pracę",
        jobType: "Praca tymczasowa",
        workingTime: "Pełen etat",
        jobText: "<my-job-text1></my-job-text1>",
    },

    {
        title: "Pomocnik mechanika linii produkcyjnej",
        location: "Gorzów Wielkopolski, Szczecin, Nowa Sól",
        salary: "PLN 3600-4500",
        contract: "Umowa o pracę",
        jobType: "Praca tymczasowa",
        workingTime: "Pełen etat",
        jobText: "<my-job-text2></my-job-text2>",
    },

    {
        title: "Operator wózka widłowego",
        location: "Gorzów Wielkopolski, Szczecin, Kostrzyn, Jelcz, Stryków, Nowa Sól",
        salary: "PLN 4000-6000",
        contract: "Umowa o pracę",
        jobType: "Praca tymczasowa",
        workingTime: "Pełen etat",
        jobText: "<my-job-text3></my-job-text3>",
    },

    {
        title: "Operator wózka widłowego",
        location: "Gorzów Wielkopolski, Szczecin, Kostrzyn, Jelcz, Stryków, Nowa Sól",
        salary: "PLN 26-35/h",
        contract: "Umowa zlecenie",
        jobType: "Praca tymczasowa",
        workingTime: "Pełen etat",
        jobText: "<my-job-text4></my-job-text4>",
    },

    {
        title: "Rzeźnik",
        location: "6 miejsc w woj. zachodniopomor. i kujawsko-pomor.",
        salary: "PLN 23.5-25/h",
        contract: "Umowa zlecenie",
        jobType: "Praca tymczasowa",
        workingTime: "Pełen etat",
        jobText: "<my-job-text5></my-job-text5>",
    },

    {
        title: "Pracownik linii produkcyjnej",
        location: "Gorzów Wielkopolski, Szczecin, Kostrzyn, Nowa Sól",
        salary: "PLN 3600-4500",
        contract: "Umowa o pracę",
        jobType: "Praca tymczasowa",
        workingTime: "Pełen etat",
        jobText: "<my-job-text6></my-job-text6>",
    },

    {
        title: "Pracownik linii produkcyjnej",
        location: "Szczecin, Kostrzyn, Nowa Sól",
        salary: "PLN 23.5-24/h",
        contract: "Umowa zlecenie",
        jobType: "Praca tymczasowa",
        workingTime: "Pełen etat",
        jobText: "<my-job-text7></my-job-text7>",
    },

    {
        title: "Operator maszyn włókienniczych",
        location: "Gorzów Wielkopolski",
        salary: "PLN 24.76-25/h",
        contract: "Umowa zlecenie",
        jobType: "Praca tymczasowa",
        workingTime: "Pełen etat",
        jobText: "<my-job-text8></my-job-text8>",
    },

    {
        title: "Operator wtryskarek",
        location: "Gorzów Wielkopolski, Kostrzyn, Jelcz",
        salary: "PLN 4000",
        contract: "Umowa o pracę",
        jobType: "Praca tymczasowa",
        workingTime: "Pełen etat",
        jobText: "<my-job-text9></my-job-text9>",
    },

    {
        title: "Spawacz MIG/MAG i TIG",
        location: "Gorzów Wielkopolski, Kostrzyn",
        salary: "PLN 6000-8000",
        contract: "Umowa o pracę",
        jobType: "Praca tymczasowa",
        workingTime: "Pełen etat",
        jobText: "<my-job-text10></my-job-text10>",
    },

    {
        title: "Spawacz MIG/MAG i TIG",
        location: "Gorzów Wielkopolski, Kostrzyn",
        salary: "PLN 45-55/h",
        contract: "Umowa zlecenie",
        jobType: "Praca tymczasowa",
        workingTime: "Pełen etat",
        jobText: "<my-job-text11></my-job-text11>",
    },

    {
        title: "Betoniarz",
        location: "Gorzów Wielkopolski, Szczecin",
        salary: "PLN 23.5-26/h",
        contract: "Umowa zlecenie",
        jobType: "Praca tymczasowa",
        workingTime: "Pełen etat",
        jobText: "<my-job-text12></my-job-text12>",
    },

    {
        title: "Murarz",
        location: "Gorzów Wielkopolski, Szczecin",
        salary: "PLN 26-34/h",
        contract: "Umowa zlecenie",
        jobType: "Praca tymczasowa",
        workingTime: "Pełen etat",
        jobText: "<my-job-text13></my-job-text13>",
    },
];


const jobHeading = document.querySelector(".entire-job-offers .job-offers h1");
const jobCards = document.querySelector(".entire-job-offers .job-offers .job-columns .job-cards");
const jobInfo = document.querySelector(".entire-job-offers .job-offers .job-columns .job-info");
const jobColumns = document.querySelector(".entire-job-offers .job-offers .job-columns");
let selectedJobCardIndex = 0;

// checking if the page is already loaded and adding jobcardlist event listener if it is
function isPageLoaded() {
    return document.readyState === 'complete';
  }
  function initJobCardsList() {
    // Check if the page is already loaded
    if (isPageLoaded()) {
      jobCardsList();
      
    } else {
      // If the page is not loaded yet, wait for the event 'DOMContentLoaded'
      document.addEventListener('DOMContentLoaded', jobCardsList);
    }
  }

// jobCards list template
const jobCardsList = () => {

        jobs.forEach((job, index) => {
        if(jobs.length == 1){
            jobHeading.innerHTML = `${jobs.length} job available`
        } else{
            jobHeading.innerHTML = `${jobs.length} jobs available`
        }
        
        let jobCard = document.createElement("div");
        jobCard.classList.add("job-card");

        let jobTitle = document.createElement("h2");

        
        jobTitle.classList.add("job-title");
        jobTitle.id="job-title";
        jobTitle.innerHTML = job.title;

        let listGroup = document.createElement("ul");

        let locationList = document.createElement("li");
        locationList.classList.add("location_job");
        let locationIcon = document.createElement("span");
        locationIcon.classList.add("material-symbols-outlined");
        locationIcon.innerHTML = `location_on`;
        let locationName = document.createElement("a");
        locationName.innerHTML = job.location;
        
        let salaryList = document.createElement("li");
        salaryList.classList.add("salary_job");
        let salaryIcon = document.createElement("span");
        salaryIcon.classList.add("material-symbols-outlined");
        salaryIcon.innerHTML = `paid`;
        let salaryName = document.createElement("a");
        salaryName.innerHTML = job.salary;

        let contractList = document.createElement("li");
        contractList.classList.add("contract_job");
        let contractIcon = document.createElement("span");
        contractIcon.classList.add("material-symbols-outlined");
        contractIcon.innerHTML = `contract`;
        let contractName = document.createElement("a");
        contractName.classList.add("contract-title");
        contractName.innerHTML = job.contract;

        jobCard.appendChild(jobTitle);

        jobCard.appendChild(listGroup);

        listGroup.appendChild(locationList);
        locationList.appendChild(locationIcon);
        locationList.appendChild(locationName);

        listGroup.appendChild(salaryList);
        salaryList.appendChild(salaryIcon);
        salaryList.appendChild(salaryName);

        listGroup.appendChild(contractList);
        contractList.appendChild(contractIcon);
        contractList.appendChild(contractName);

        jobCards.appendChild(jobCard);

        //when u click selected job card => show jobInfo, more information about this job
        jobCard.addEventListener("click", () => {
            selectedJobCardIndex = index;
            const allJobInfo = document.querySelectorAll(".job-info");
            
            
            allJobInfo.forEach((info) => {
                info.style.display = "none";
            });
            
            jobInfo.style.display = "block";
            
            let headerJobInfo = document.createElement("div");
            headerJobInfo.classList.add("header-job-info");

            let headerJobName = document.createElement("div");
            headerJobName.classList.add("header-job-name");

            let headerJobTitle = document.createElement("h1");
            
            headerJobTitle.innerHTML = i18next.t(job.title);
            
            headerJobTitle.classList.add("header-job-title");
            

            let jobInfoList = document.createElement("div");
            jobInfoList.classList.add("job-info-list");
            
            let jobInfolistGroup = document.createElement("ul");

            let locationJobInfo = document.createElement("li");
            locationJobInfo.classList.add("location-job-info");
            let locationJobText = document.createElement("h3");
            locationJobText.classList.add("location-job-text");
            locationJobText.innerHTML = i18next.t(`Lokalizacja`);
            let locationJobName = document.createElement("span");
            locationJobName.classList.add("location-job-name");
            locationJobName.innerHTML = job.location;
                    
            let salaryJobInfo = document.createElement("li");
            salaryJobInfo.classList.add("salary-job-info");
            let salaryJobText = document.createElement("h3");
            salaryJobText.classList.add("salary-job-text");
            salaryJobText.innerHTML = i18next.t(`Wynagrodzenie`);
            let salaryJobName = document.createElement("span");
            salaryJobName.classList.add("salary-job-name");
            salaryJobName.innerHTML = job.salary;

            let contractJobInfo = document.createElement("li");
            contractJobInfo.classList.add("contract-job-info");
            let contractJobText = document.createElement("h3");
            contractJobText.classList.add("contract-job-text");
            contractJobText.innerHTML = i18next.t(`Umowa`);
            let contractJobName = document.createElement("span");
            contractJobName.classList.add("contract-job-name");
            contractJobName.innerHTML = i18next.t(job.contract);

            let typeJobInfo = document.createElement("li");
            typeJobInfo.classList.add("type-job-info");
            let typeJobText = document.createElement("h3");
            typeJobText.classList.add("type-job-text");
            typeJobText.innerHTML = i18next.t(`Zatrudnienie`);
            let typeJobName = document.createElement("span");
            typeJobName.classList.add("type-job-name");
            typeJobName.innerHTML = i18next.t(job.jobType);

            let timeJobInfo = document.createElement("li");
            timeJobInfo.classList.add("time-job-info");
            let timeJobText = document.createElement("h3");
            timeJobText.classList.add("time-job-text");
            timeJobText.innerHTML = i18next.t(`Czas pracy`);
            let timeJobName = document.createElement("span");
            timeJobName.classList.add("time-job-name");
            timeJobName.innerHTML = i18next.t(job.workingTime);

            let applyButtonClass = document.createElement("div");
            applyButtonClass.classList.add("apply-button-class");
            let applyButton = document.createElement("button");
            applyButton.classList.add("apply-button");
            applyButton.innerHTML = i18next.t(`Aplikuj teraz`);
            applyButton.addEventListener("click", () => redirectCVjob(job.title));

            

            let line = document.createElement("hr");



            headerJobInfo.appendChild(headerJobName);

            headerJobName.appendChild(headerJobTitle);
            headerJobInfo.appendChild(jobInfoList);

            jobInfoList.appendChild(jobInfolistGroup);

            jobInfolistGroup.appendChild(locationJobInfo);
            locationJobInfo.appendChild(locationJobText);
            locationJobInfo.appendChild(locationJobName);

            jobInfolistGroup.appendChild(salaryJobInfo);
            salaryJobInfo.appendChild(salaryJobText);
            salaryJobInfo.appendChild(salaryJobName);

            jobInfolistGroup.appendChild(contractJobInfo);
            contractJobInfo.appendChild(contractJobText);
            contractJobInfo.appendChild(contractJobName);

            jobInfolistGroup.appendChild(typeJobInfo);
            typeJobInfo.appendChild(typeJobText);
            typeJobInfo.appendChild(typeJobName);

            jobInfolistGroup.appendChild(timeJobInfo);
            timeJobInfo.appendChild(timeJobText);
            timeJobInfo.appendChild(timeJobName);

            headerJobInfo.appendChild(applyButtonClass);
            applyButtonClass.appendChild(applyButton);

            jobInfo.innerHTML = '';
            jobInfo.appendChild(headerJobInfo);
            jobInfo.appendChild(line);

            
            let jobInfoInfo = document.createElement("div");
            jobInfoInfo.classList.add("main-job-info");
            jobInfoInfo.innerHTML = job.jobText;
            jobInfo.appendChild(jobInfoInfo); 

                
        });
        
    
    });
    selectJobCard(selectedJobCardIndex);
};


//when another jobCard is clicked click it once more (it automatically show new jobInfo)
//otherwise when site first time loaded jobInfo will not show up
export function selectJobCard(index) {
    const jobCardToSelect = document.querySelectorAll(".job-card")[index];
    if (jobCardToSelect) {
      jobCardToSelect.click(); 
      selectedJobCardIndex = index;
    }
  }

//export selected jobCard index to translate.js
export function getSelectedJobCardIndex() {
    return selectedJobCardIndex;
}

//function for applyButton
//store jobTitle in selectedJob that will be shown in CV.html 
export function redirectCVjob(jobTitle) {
    localStorage.setItem("selectedJob", jobTitle);
    window.location.href = "CV.html";
}

//make sure that entire site is loaded
if(document.querySelector(".entire-job-offers .job-offers h1")){
    initJobCardsList();
}