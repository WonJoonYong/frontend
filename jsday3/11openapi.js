 document.getElementById('search').addEventListener('click', function(){
    const query = document.getElementById('query').value
    const page = document.getElementById('page').value
    const size = document.getElementById('size').value
    
    let sort = document.getElementById('accuracy').checked
    if(sort == true) sort= 'accuracy'
    else sort = 'recency'
    
    alert(`query=${query}&page=${page}$size=${size}&sort=${sort}`)
    
    if(query=="")alert('검색어는 필수 입력입니다.')     // 카카오 open api요청시 필수 파라미터.
    else search(query,page,size,sort)
}) // 함수 끝

//search('트와이스',1,10,'accyracy')  함수 정의보다 앞에서 호출하면 오류

const search = function(v1,v2,v3,v4){
    // 비동기 통신을 위한 통신객체ㄴ
    const xhr = new XMLHttpRequest()
    
    //1. http 요청 초기화
    xhr.open("GET",`https://dapi.kakao.com/v2/search/vclip?query=${v1}&page=${v2}&size=${v3}&sort=${v4}`)
    //2. 요청header 설정
    xhr.setRequestHeader("Authorization", "KakaoAK 2f0ac715a9d6547536ffb92dc51962da")
    //3.http요청 전송
    xhr.send()
    //4,onload : 요청이 완료되고 이애 대한 응답
        xhr.onload = function(){
            if(xhr.status==200){
            //요청에 대한 응답을 response 프로퍼티가 저장
            document.getElementById("list").innerHTML=''

            //응답으로 받은 documents -객체 배열
            //          객체 구성 : author, datetime, play_time, thumnail
            //          -> 프로퍼티 값들을 태그요소로 표현(출력)

            let $response = JSON.parse(xhr.response)        //xhr.response 는 문자열 -<=> 자바스크립트 객채로 변환
            let results = $response.documents               //author, datetime, title, url, play-time, thumbnail       
            results.forEach(element => {             // results 배열의 각 값들을 순서대로 element가 참조하며 함수 실행.
                const $ul = document.createElement('ul')    //새로운 ul태그 요소 생성
                const temp = `<li>${element.author}</li>
                <li>${element.title}</li>
                <li>${element.datetime}</li>
                <li>${element.play_time}</li> 
                <li><a href = ${element.url} target = "_blank"><img src = ${element.thumbnail} width = "200px"></a></li>`
                //url 은 a 태그 thumnail은 img 태그에 속성값으로 활용할 수 있음
            

                $ul.innerHTML=temp                                  // ul 태그 요소의 innerHTML 설정
                document.getElementById('list').appendChild($ul)    // ul 태그요소를  <p id="result"></p> 의 자식요소로 추가

            });
        } //foreach 끝
        } //onload 끝
} // 함수 끝

search('트와이스',1,10,'accyracy')