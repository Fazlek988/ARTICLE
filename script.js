// script.js
// Простой скрипт для интерактивности

// Функция для показа совета по выбору методологии
function showAdvice() {
    const adviceElement = document.getElementById('choice-advice');
    
    // Переключаем видимость
    if(adviceElement.style.display === 'block') {
        adviceElement.style.display = 'none';
    } else {
        adviceElement.style.display = 'block';
    }
}

// Добавляем плавную прокрутку при клике на якорные ссылки (если они есть)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Динамическое обновление года в футере (опционально)
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('footer p');
    if(yearSpan) {
        yearSpan.innerHTML = `© FAZKEK, ${new Date().getFullYear()}. Все права на статью защищены.`;
    }
});

// Подсветка текущего раздела при прокрутке
window.addEventListener('scroll', function() {
    const chapters = document.querySelectorAll('.chapter');
    const scrollPosition = window.scrollY;
    
    chapters.forEach(chapter => {
        const chapterTop = chapter.offsetTop - 100;
        const chapterBottom = chapterTop + chapter.offsetHeight;
        
        if(scrollPosition >= chapterTop && scrollPosition < chapterBottom) {
            chapter.style.boxShadow = '0 4px 12px rgba(52, 152, 219, 0.3)';
            chapter.style.transition = 'box-shadow 0.3s ease';
        } else {
            chapter.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });
});