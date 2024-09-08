function changeLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);

    // Cambiar el contenido de los elementos según el idioma seleccionado
    document.querySelectorAll('[data-es][data-en]').forEach(function(element) {
        if (lang === 'es') {
            element.textContent = element.getAttribute('data-es');
        } else if (lang === 'en') {
            element.textContent = element.getAttribute('data-en');
        }
    });
}

// Configurar el idioma inicial según el atributo 'lang' del elemento <html>
document.addEventListener('DOMContentLoaded', function() {
    var lang = document.documentElement.getAttribute('lang');
    changeLanguage(lang);
});