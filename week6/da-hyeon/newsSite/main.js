//DOM
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const news = document.querySelector('.news');
//API Key
const apiKey = "2721d1f0de38415b978ddeed5ff2291a";
let topic;

//EventListener
searchForm.addEventListener('submit', retrieve);
function retrieve(e){
    e.preventDefault();
    checkTopic()
    getNews()
}
//searchInput 검사 (공백, trim)
function checkTopic(){
    topic = searchInput.value.trim();
    topic 
    ? console.log(topic)
    : alert('검색어를 입력해주세요.')
}
//getNews
async function getNews(){
    let url=`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;
    const fetched = await fetch(url);
    if(fetched.status == 200){
        const newsData = await fetched.json();
        //News 결과 유무에 따라 render
        newsData.totalResults
        ? renderNews(newsData) 
        : noResult()  
    }else{
        throw new Error ("error")
    }
} 
//News 결과 있을 때) newsList출력
function renderNews(newsData){
    news.innerHTML="";
    const article = newsData.articles;
    console.log(article);
    let newsList = article.reduce((prevLi, currentLi, index)=>{
        return (
            prevLi + 
            `<li class="news-list">
               <a href="${article[index].url}" target="_blank">
                    <div class="news-thumbnail">
                        <img src="${article[index].urlToImage}">
                    </div>
                    <div class="news-contents">
                        <div class="news-info">
                            <span class="news-author">${article[index].author}</span>
                            <span class="news-date">${article[index].publishedAt}</span>
                        </div>
                        <p class="news-title">${article[index].title}</p>
                        <p class="news-description">${article[index].description}</p>
                    </div>
               </a> 
            </li>`
        )
    },'');
    news.innerHTML=newsList;
}
//News 결과 없을 때) 안내 메시지 출력
function noResult(){
    news.innerHTML="";
    news.innerHTML=`
        <li> "${topic}" 관련 기사는 존재하지않습니다.</li>
    `
}