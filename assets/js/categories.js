---
---

window.onload = function () {
    let articles = document.querySelectorAll('[data-url]');
    articles.forEach(article =>
        article.addEventListener('click', () => window.location.href = article.dataset.url))
};