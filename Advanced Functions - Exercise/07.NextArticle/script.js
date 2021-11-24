function getArticleGenerator(articles) {
    const articlesToShow = articles;
    const div = document.getElementById('content');
    
    return () => {
        if (articlesToShow.length > 0) {
            const article = document.createElement('article');
            article.textContent = articlesToShow.shift();
            div.appendChild(article);
        }
    }
}
