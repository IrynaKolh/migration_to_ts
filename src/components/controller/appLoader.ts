import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: 'edd2ef8b3deb48ac858e8c510570de81', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
