let days = document.forms[0].days
console.log(days.value)
console.log(typeof days)
console.log(typeof days.value)
days = parseInt(days.value)
console.log(typeof days)


days = document.forms[0].days
let start = document.forms[0].start

//선택할 수 있는 입실날짜의 범위 설정 min 속성값 ~max 속성값.
let today = new Date()
start.min = dateFormat(today)
today.setDate(today.getDate()+25)   //임의로 오늘~ 25 후
start.max = dateFormat(today)
let end = document.forms[0].end

function daySelect(){
    alert('숙박일수' + days.value + '입니다.')
    console.log('숙박일수 ' +days.value+ '입니다')
    if(start.value!='')
        endOutput()
}

function endOutput(){
    //parseInt() select에서 선택한 값은 typeof가 string
    let out = new Date(start.value) //선택한 입실 날짜로 date 객체생성
    console.log('입실날짜 : ' +days.value + '입니다')
    out.setDate(out.getDate() + parseInt(days.value))
    console.log('퇴실날짜 : ' + out)
    console.log('퇴실날짜 dateFormat :' + dateFormat(out))
    end.value=dateFormat(out)
}
function dateFormat(out){   //날짜 타입 new date() 인자
    const month = ((out.getMonth()+1).toString().padStart(2,0))
    const date = out.getDate().toString().padStart(2,0)
    let result=[out.getFullYear(),month,date].join('-')
   // 배열요소를 특정기호로 연결하기
    console.log(result)
    return result
}