// LANGUAGE TOGGLE
const langEnBtn = document.getElementById('lang-en-btn');
const langHiBtn = document.getElementById('lang-hi-btn');

langEnBtn.addEventListener('click', () => {
    switchLanguage('en');
});

langHiBtn.addEventListener('click', () => {
    switchLanguage('hi');
});

function switchLanguage(lang) {
    const enElements = document.querySelectorAll('.lang-en');
    const hiElements = document.querySelectorAll('.lang-hi');

    if(lang === 'en') {
        enElements.forEach(el => el.classList.remove('hidden'));
        hiElements.forEach(el => el.classList.add('hidden'));
        langEnBtn.classList.add('active');
        langHiBtn.classList.remove('active');
    } else {
        enElements.forEach(el => el.classList.add('hidden'));
        hiElements.forEach(el => el.classList.remove('hidden'));
        langEnBtn.classList.remove('active');
        langHiBtn.classList.add('active');
    }
}

// CROP SEARCH FUNCTIONALITY
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

if(searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();
        redirectToCrop(query);
    });

    searchInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') searchBtn.click();
    });
}

function redirectToCrop(query) {
    switch(query) {
        case 'wheat':
        case 'गेहूं':
            window.location.href = 'wheat.html';
            break;
        case 'rice':
        case 'चावल':
            window.location.href = 'rice.html';
            break;
        case 'maize':
        case 'मक्का':
            window.location.href = 'maize.html';
            break;
        case 'cotton':
        case 'कपास':
            window.location.href = 'cotton.html';
            break;
        case 'sugarcane':
        case 'गन्ना':
            window.location.href = 'sugarcane.html';
            break;
        default:
            alert('Crop not found! Please check your spelling.');
    }
}
