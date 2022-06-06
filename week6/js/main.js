const buttonEl = document.querySelector(".search-btn");

// HTML Entity 변경
String.prototype.toHtmlEntities = function() {
  return this.replace(/./gm, function(s) {
      return (s.match(/[a-z0-9\s]+/i)) ? s : "&#" + s.charCodeAt(0) + ";";
  });
};

buttonEl.addEventListener("click", () => {
  const inputBoxEl = document.querySelector("#input-bar");
  let keyword = inputBoxEl.value.toUpperCase();//대소문자 구분 없이 검색위해

  if(keyword === '')
    return alert('검색어를 입력하세요');
  
  search(keyword);
});

async function search(keyword) {
  const apiKey = '04324f28976e49bd84feaeb33b93ff3d';
  //날짜 데이터 객체 생성 
  const date = new Date(); 
  const today = date.toISOString().slice(0, 10);
  //.replace(/\s/g,'').replace(/\./g,'-').slice(0, -1);
  
  try {
    //'user가 검색한 키워드 + 오늘 날짜' 기준으로 정보검색
    const url = `https://newsapi.org/v2/everything?q=${keyword}&from=${today}&sortBy=popularity&language=en&apiKey=${apiKey}`;
    
    const res = await fetch(url);
    if (res.status !== 200) {  //응답 성공X 에러처리 (ft:팀장님 코드)
      throw new Error("Can't find news");
    }
    const resJSON = await res.json();
    showArticle(resJSON); //달라지는 인자 값 구분
  } catch (e) {
    console.error(e);
  }
};

function showArticle(resJSON) {
  const main = document.querySelector('.fixed-main');
  main.innerHTML=''; //초기화
  
  //map을 돌려서 innerHtml을 채워준다. -> 체워주면 되기 때문에 변수에 받는거X
  resJSON.articles.map( (data, idx) => {
    let {author, url, urlToImage, publishedAt, title, description} = data;
    publishedAt = publishedAt.slice(0, 10);
    description = description.toHtmlEntities();

    //에러처리 : author에 !(falsy값), @가 포함되어 있다 
    //-> 둘 중 하나가 참인 경우 -> 아래 실행문 실행  
    if (!data.author || /@/g.test(data.author) ){
      author = 'author: undefined';
    }

    if(idx === 0) {
      //첫번째 정보인 경우   
      const firstArticle = `
        <a href=${url} class="sectionAnchor">
          <section class="first-article">
            <img src=${urlToImage} alt=""/>
            <small>${author}</small>
            <span>${publishedAt}</span>
            <h2 class="first-title">${title}</h2>     
            <p class="content">${description}</p>
          </section>
        </a>
      `;
      main.insertAdjacentHTML( 'beforeend', firstArticle);
    } else {
      let cardHtml =`
        <a href=${url} class="card-article">
          <img src=${urlToImage} alt=""/>
          <div>
            <small>${author} <span class="date">${publishedAt}</span></small> 
            <h2 class="card-title">${title}</h2>
            <p class="content">${description}</p>
          </div>
        </a>
      `;
      main.insertAdjacentHTML( 'beforeend', cardHtml);
    }
  });
}


