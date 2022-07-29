function valid_check(){
    const frm = document.forms[0]
    const name = frm.name
    const email = frm.email
    const password = frm.password
    const age = frm.age
    let isvalid = true

    if(name.value==''){
        alert('이름은 필수 입력입니다.')
        name.focus()
        isvalid=false
    }else

    if(password.value.length < 4){
        alert('패스워드는 4글자 이상입니다.')
        password.focus()
        isvalid=false
    }
//  이메일은 기호 @ 와 . 을 모두 포함해야하는데 . 은 마지막 위치는 아니어야 함
    if(email.value=='' || email.value.indexOf('@')== -1 || email.value.indexOf('.' == -1 || email.value.endswidth('.'))){
        alert('간단한 이메일형식 체크 실패')
        email.focus()
        isvalid=false
    }
// 실제 이메일 주소는 형식이 위의 조건보다 복잡하다 계정문자열에 특수기호는 - _ . 만포함.
//              도메인이름에 기호는 사용 못 함. naver.com O na-ver.com X 333naver,com(숫자)
// 복잡한 조건의 유효성 검사를 정규식 표현으로 할 수 있습니다.
// 정규표현식은 전화번호,이메일,패스워드, 한글,영문 입력체크에 활용.

var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
if(regEmail.test(email.value)===false){
    alert('입력된 값은 이메일 형식이 아닙니다.')
}

// 정규표현식은   / / 안에 작성
// ^ 는 시작
// $ 는 끝
// [] 는 [] 안의 문자들중 1개 선택
// * 는 0번 이상 문자 반복
// []? 는 [] 안의 문자들이 있는가? 존재여부
// () 는 그룹
// {n} 는 n개
// {n,m}는 n개 이상, m번 이

    if(age.value < 15 || age.value> 99){
        alert('나이는 15~99범위 의 값이어야 합니다.')
        age.focus()
        isvalid=false
    }

    // 취미는 반드시 1개 이상은 선택하도록 조건추가
    let cnt = 0
    frm.hobby.forEach(element => {
        if(element.check)
        cnt++
    });
    if(cnt==0){
        alert('취미는 1개 이상 선택햐셔야합니다.')
        isvalid=false
    }


    if(isvalid){
        frm.action='13result.html'
        frm.submit()
    }else{
        alert('유효성 통과 실패!!!')
    }
}