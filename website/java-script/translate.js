import * as i18next from 'https://cdn.skypack.dev/i18next@21';
import { getSelectedJobCardIndex, selectJobCard, jobs }  from './offers-script.js'

//initialize i18next with default language when website first time load
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {}
    },
    pl: {
      translation: {}
    }
  }
});

// fetches translation JSON files for the selected language (en.json or pl.json)
function loadTranslation(language) {
  return fetch(`translations/${language}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch translation for ${language}`);
      }
      return response.json();
    })
    .then(translations => {
      i18next.init({
        lng: language,
        resources: {
          [language]: {
            translation: translations
          }
        }
      });
      
    })
    .catch(error => {
      console.error('Error during translation loading:', error);
    });
}


const translationKeys = [
  'contact-text', 'employee-navbar', 'offers-navbar', 'CV-navbar', 'benefits-navbar', 'language-navbar',
  'button-pl-menu', 'button-eng-menu', 'button-pl-box', 'button-eng-box',
  
  'employee-footer', 'offers-footer', 'CV-footer',
  'benefits-footer', 'regulations-footer', 'privacy-footer', 'rodo-footer', 'data-footer',

  'offer_sentance1',
  'offer_sentance2', 'offer_sentance3', 'offer-sentence-button',
  'column-1', 'column-1-p', 'btn-CV-column-1', 'column-2', 'column-2-p1',
  'column-2-p2', 'column-2-p3', 'column-2-p4', 'column-2-p5',
  'column-2-p6', 'column-2-p7', 'btn-benefits-column-2', 
  'company-title', 'information-1', 'information-2',
  'company-title-2', 'handshake-1', 'handshake-2', 'handshake-3',
  'contact-column-form1', 'contact-column-form2',
  'contact-column-form3', 'contact-column-form4',
  'contact-column-form5', 'contact-column-form6',
  'submit-button-contact-column-form',

  'main-job-role-text', 'main-job-skill-text', 'main-job-role-list-1-1',
  'main-job-role-list-1-2', 'main-job-role-list-1-3', 'main-job-role-list-1-4',
  'main-job-role-list-1-5', 
  'main-job-skill-list-1-1', 'main-job-skill-list-1-2', 'main-job-skill-list-1-3',
  'main-job-skill-list-1-4', 'main-job-skill-list-1-5', 'main-job-skill-list-1-6',

  'main-job-role-list-2-1', 'main-job-role-list-2-2', 'main-job-role-list-2-3',
  'main-job-role-list-2-4', 'main-job-role-list-2-5', 
  'main-job-skill-list-2-1', 'main-job-skill-list-2-2', 'main-job-skill-list-2-3',
  
  'main-job-role-list-3-1', 'main-job-role-list-3-2', 'main-job-role-list-3-3',
  'main-job-role-list-3-4', 'main-job-role-list-3-5', 
  'main-job-skill-list-3-1', 'main-job-skill-list-3-2', 'main-job-skill-list-3-3',
 
  'main-job-role-list-4-1', 'main-job-role-list-4-2', 'main-job-role-list-4-3',
  'main-job-role-list-4-4', 'main-job-role-list-4-5', 'main-job-role-list-4-6', 
  'main-job-skill-list-4-1', 'main-job-skill-list-4-2', 'main-job-skill-list-4-3',
  'main-job-skill-list-4-4', 'main-job-skill-list-4-5', 'main-job-skill-list-4-6',

  'main-job-role-list-5-1', 'main-job-role-list-5-2', 'main-job-role-list-5-3',
  'main-job-role-list-5-4', 'main-job-role-list-5-5', 'main-job-role-list-5-6', 
  'main-job-skill-list-5-1', 'main-job-skill-list-5-2', 'main-job-skill-list-5-3',
  'main-job-skill-list-5-4', 'main-job-skill-list-5-5', 'main-job-skill-list-5-6',

  'main-job-role-list-6-1', 'main-job-role-list-6-2', 'main-job-role-list-6-3',
  'main-job-role-list-6-4', 'main-job-role-list-6-5', 'main-job-role-list-6-6', 
  'main-job-role-list-6-7', 

  'main-job-role-list-7-1', 'main-job-role-list-7-2', 'main-job-role-list-7-3',
  'main-job-role-list-7-4', 'main-job-role-list-7-5', 'main-job-role-list-7-6', 'main-job-role-list-7-7', 
  'main-job-role-list-7-8', 'main-job-role-list-7-9', 
  'main-job-skill-list-7-1', 'main-job-skill-list-7-2', 'main-job-skill-list-7-3',
  'main-job-skill-list-7-4', 'main-job-skill-list-7-5', 
  'main-job-role-list-8-1', 'main-job-role-list-8-2', 'main-job-role-list-8-3',
  'main-job-role-list-8-4', 'main-job-role-list-8-5', 'main-job-role-list-8-6', 'main-job-role-list-8-7', 
  'main-job-role-list-8-8', 'main-job-role-list-8-9', 
  'main-job-skill-list-8-1', 'main-job-skill-list-8-2', 'main-job-skill-list-8-3',
  'main-job-skill-list-8-4', 'main-job-skill-list-8-5', 

  'main-job-role-list-9-1', 'main-job-role-list-9-2', 'main-job-role-list-9-3',
  'main-job-role-list-9-4', 'main-job-role-list-9-5', 'main-job-role-list-9-6', 'main-job-role-list-9-7', 
  'main-job-skill-list-9-1', 'main-job-skill-list-9-2', 'main-job-skill-list-9-3',
  'main-job-skill-list-9-4', 'main-job-skill-list-9-5', 'main-job-skill-list-9-6', 'main-job-skill-list-9-7', 

  'main-job-role-list-10-1', 'main-job-role-list-10-2', 'main-job-role-list-10-3',
  'main-job-role-list-10-4', 'main-job-role-list-10-5', 'main-job-role-list-10-6', 'main-job-role-list-10-7', 
  'main-job-skill-list-10-1', 'main-job-skill-list-10-2', 'main-job-skill-list-10-3',
  'main-job-skill-list-10-4', 'main-job-skill-list-10-5', 'main-job-skill-list-10-6', 'main-job-skill-list-10-7', 

  'main-job-role-list-11-1', 'main-job-role-list-11-2', 'main-job-role-list-11-3',
  'main-job-role-list-11-4', 'main-job-role-list-11-5', 'main-job-role-list-11-6', 'main-job-role-list-11-7', 
  'main-job-role-list-11-8', 'main-job-role-list-11-9', 'main-job-role-list-11-10',
  'main-job-skill-list-11-1', 'main-job-skill-list-11-2', 'main-job-skill-list-11-3',
  'main-job-skill-list-11-4', 'main-job-skill-list-11-5', 'main-job-skill-list-11-6', 'main-job-skill-list-11-7', 
  'main-job-skill-list-11-8', 

  'main-job-role-list-12-1', 'main-job-role-list-12-2', 'main-job-role-list-12-3',
  'main-job-role-list-12-4', 'main-job-role-list-12-5', 'main-job-role-list-12-6', 'main-job-role-list-12-7', 
  'main-job-role-list-12-8', 'main-job-role-list-12-9', 'main-job-role-list-12-10',
  'main-job-skill-list-12-1', 'main-job-skill-list-12-2', 'main-job-skill-list-12-3',
  'main-job-skill-list-12-4', 'main-job-skill-list-12-5', 'main-job-skill-list-12-6', 'main-job-skill-list-12-7', 
  'main-job-skill-list-12-8', 

  'main-job-role-list-13-1', 'main-job-role-list-13-2', 'main-job-role-list-13-3',
  'main-job-role-list-13-4', 'main-job-role-list-13-5', 'main-job-role-list-13-6', 'main-job-role-list-13-7', 
  'main-job-skill-list-13-1', 'main-job-skill-list-13-2', 'main-job-skill-list-13-3',
  'main-job-skill-list-13-4', 'main-job-skill-list-13-5', 'main-job-skill-list-13-6', 

  'main-job-role-list-14-1', 'main-job-role-list-14-2', 'main-job-role-list-14-3',
  'main-job-role-list-14-4', 'main-job-role-list-14-5', 'main-job-role-list-14-6', 
  'main-job-skill-list-14-1', 'main-job-skill-list-14-2', 'main-job-skill-list-14-3',
  'main-job-skill-list-14-4', 'main-job-skill-list-14-5', 

  'name', 'surname', 'email', 'phone', 'countrty', 'city', 'citizenship', 'birth', 'sexSelectText', 'female', 
  'male', 'visaSelectText', 'yes', 'no', 'uploads', 'browse-file-text', 'fileCVuploading', 'message-CV', 'send-button',
  'selectOptionText', 'selectOptionText1',

  'benefits-1-text', 'benefits-2-text-big', 'benefits-2-text-small-1', 'benefits-2-text-small-2', 'benefits-2-text-small-3', 
  'benefits-2-text-small-4', 'benefits-2-text-small-5','benefits-2-text-small-6', 'benefits-3-text-big', 
  'benefits-3-text-small', 'benefits-4-text-big', 'benefits-4-text-small', 
  
  'rodo-text-1', 'rodo-text-2', 'rodo-text-3', 'rodo-text-4', 'rodo-text-5', 'rodo-text-6', 'rodo-text-7', 'rodo-text-8',
   'rodo-text-5-1', 'rodo-text-5-2', 'rodo-text-5-3', 'rodo-text-5-4',  'collaps-btn-1', 'collaps-btn',

   'privacy-text-1', 'privacy-text-2', 'privacy-text-3', 'privacy-text-4', 'privacy-text-5', 'privacy-text-6',
    'privacy-text-7', 'privacy-text-8', 'privacy-text-9', 
    'privacy-header-1', 'privacy-header-2', 'privacy-header-3', 'privacy-header-4', 'privacy-header-5', 'privacy-header-6', 'privacy-header-7', 
    'privacy-header-8', 'privacy-text-3-1', 'privacy-text-3-2', 'privacy-text-3-3', 

    'checkbox', 'checkbox2',

];

const placeholderKeys = ['name', 'surname', 'email', 'phone', 'country', 'city', 'citizenship', 'birth', 'message']

// update translations for specified keys
//function for updating translationKeys
function updateTranslations(t) {
  translationKeys.forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = t(key);
    } 
  });
}

// function for updating placeholders
function updatePlaceholders(t) {
  placeholderKeys.forEach(key => {
    const element = document.querySelector(`[name="${key}"]`);
    if (element) {
      element.placeholder = i18next.t(`placeholders.${key}`);
    }
  });
}
// translate placeholders in selected language
function translatePlaceholders(language) {
  updatePlaceholders(i18next.getFixedT(language, 'placeholders'));
}

// translate selectedJob (jobTitle), from the offer user chose
function translateSelectedJob(language) {
  // Download selectedJob from localStorage
  const selectedJob = localStorage.getItem("selectedJob");

  // Translate selectedJob and set it to the appropriate element on the page
  const selectedJobElement = document.getElementById('selectedJob');

  if (selectedJobElement) {
    const translatedSelectedJobText = i18next.t('selected-job-text');
    const translatedSelectedJob = i18next.t(selectedJob);

    // Check if the selectedJob translation is available
    if (translatedSelectedJob) {
      const finalTranslatedText = `${translatedSelectedJobText} ${translatedSelectedJob}`;
      selectedJobElement.innerHTML = finalTranslatedText;
    } else {
      // If a translation is not available, do not display selectedJob
      selectedJobElement.innerHTML = ''; 
    }
  }
}

function translateJobCard(language) {
//Translate job-card, for job-info u just write in pl.json, en.json phrases

// translate title in jobCard
      let jobTitleElements = document.querySelectorAll(".job-title");
      jobTitleElements.forEach((element, index) => {
          let translatedJobTitle = i18next.t(jobs[index].title);
          element.innerHTML = translatedJobTitle;
      });
// translate contract in jobCard
      let contractJobElements = document.querySelectorAll(".contract-title");
      contractJobElements.forEach((element, index) => {
        let translatedContract = i18next.t(jobs[index].contract);
        element.innerHTML = translatedContract;
      });

      updateTranslations(i18next.t);  //translate jobInfo when jobCard is translated 

    }

// change language function
function changeLanguage(language) {
  
  //save selected language to localStorage
  //when u click on other sub-site it will remember what language user chose
  console.log(`Changing language to: ${language}`);
  localStorage.setItem('selectedLanguage', language); //save selected language

  loadTranslation(language).then(() => {
    i18next.changeLanguage(language, (err, t) => {
      
      
      
      if(window.location.pathname.includes("/offers.html")){
        //when translate stay in offer u read
        const currentJobCardIndex = getSelectedJobCardIndex();
        selectJobCard(currentJobCardIndex);
      };

      if(window.location.pathname.includes("/CV.html")){
        translatePlaceholders(language);
        translateSelectedJob(language);
      }

      //submitButton on home page have 'value' that need to be translated
      const submitButton = document.getElementById('submit-button-contact-column-form');
      if (submitButton) {
        const translatedSubmitButton = i18next.t('submit-button-contact-column-form');
        submitButton.value = translatedSubmitButton || 'Wyślij';
      }
      
      updateTranslations(t);  //for others cards then offers.hmtl
      
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const buttonPlmenu = document.getElementById('button-pl-menu');
  const buttonEngmenu = document.getElementById('button-eng-menu');
  const buttonPlbox = document.getElementById('button-pl-box');
  const buttonEngbox = document.getElementById('button-eng-box');


    // when u change site, translate it on selected language
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      changeLanguage(savedLanguage);
    } else {
      // If not, set the default language
      changeLanguage('pl'); 
    }

  const languageButtons = [buttonEngbox, buttonEngmenu, buttonPlbox, buttonPlmenu];
  
  //translate jobCard 
  const jobCardElements = document.querySelectorAll(".job-card");
  jobCardElements.forEach((jobCard, index) => {
    jobCard.addEventListener('click', function () {
      translateJobCard(i18next.language);
      
    });
  });

//when language button is clicked, change language
languageButtons.forEach(button => {
    button.addEventListener('click', function() {
      const language = button.id === 'button-eng-menu' || button.id === 'button-eng-box' ? 'en' : 'pl';
      changeLanguage(language);

    });
  });
  
});