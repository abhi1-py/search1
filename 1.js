
    function search() {
      const searchTerm = document.getElementById('searchInput').value;
      const encodedTerm = encodeURI(searchTerm);
      const searchURL = `https://www.google.com/search?q=${encodedTerm}`;
      window.open(searchURL, '_blank');
    }

    async function fetchNews() {
      const apiKey = 'ac9266b67bbd48f2abc013f1bce81fc1'; // Replace with your News API key
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const newsFeed = document.getElementById('newsFeed');
        if (data.articles) {
          data.articles.slice(0, 5).forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `<strong>${article.title}</strong><br>${article.description}<br><a href="${article.url}" target="_blank">Read more</a>`;
            newsFeed.appendChild(newsItem);
          });
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    fetchNews();
