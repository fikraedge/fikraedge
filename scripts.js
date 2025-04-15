function setLanguage(lang) {
    let contentElements = document.querySelectorAll('#content h1, #content p');
    contentElements.forEach(element => {
        if (element.getAttribute('lang') === lang) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

// تفعيل اللغة الافتراضية (مثال: اللغة العربية)
setLanguage('ar');
