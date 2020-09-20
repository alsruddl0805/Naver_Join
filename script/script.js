// 1. 아이디 공백 검사

let uId = document.querySelector("#uId");
uId.addEventListener('focusout',Chk_id);

function Chk_id() {
    let uIdChk = document.querySelector("#uIdChk");
        if (uId.value == "") {
            uIdChk.innerText = "필수 정보입니다.";
            uId.focus();
        } else {
            uIdChk.innerText = "";
        }
}

// 2. 비밀번호 공백 검사

let uPw = document.querySelector(".uPw");
uPw.addEventListener('blur',Chk_pw);

function Chk_pw() {
    let uPwChk = document.querySelector("#uPwChk");
        if (uPw.value == "") {
            uPwChk.innerText = "필수 정보입니다.";
            uPw.focus();
        } else {
            uPwChk.innerText = "";
        }
}

// 3. 비밀번호 확인 공백 & 일치 검사

let uPwT = document.querySelector(".uPwT");
uPwT.addEventListener('blur',Chk_pwT);

function Chk_pwT() {
    let uPwTChk = document.querySelector("#uPwTChk");
        if (uPwT.value == "") {
            uPwTChk.innerText = "필수 정보입니다.";
            uPwT.focus();
        } else if (uPw.value != uPwT.value) {
            uPwTChk.innerText = "비밀번호가 일치하지 않습니다."
        } else {
            uPwTChk.innerText = "";
        }
}

// 4. 이름 공백 검사

let uName = document.querySelector(".uName");
uName.addEventListener('blur',Chk_name);

function Chk_name() {
    let uNameChk = document.querySelector("#uNameChk");
        if (uName.value == "") {
            uNameChk.innerText = "필수 정보입니다.";
            uName.focus();
        } else {
            uNameChk.innerText = "";
        }
}

// 5. 생년월일 공백 검사

// * 월 옵션 추가

let optFirst = "<option>월</option>";

    for (var i = 1; i <= 12; i++) {
        optFirst += "<option>" + i + "</option>";
    }

document.getElementById("month").innerHTML = optFirst;


let birthYear = document.querySelector("#year");
birthYear.addEventListener('blur',Chk_birth);
let birthMonth = document.querySelector("#month");
birthMonth.addEventListener('blur',Chk_birth);
let birthDay = document.querySelector("#day");
birthDay.addEventListener('blur',Chk_birth);
let uBirthChk = document.querySelector("#uBirthChk");

function Chk_birth() {
    if (birthYear.value == "") {
        uBirthChk.innerText = "태어난 년도 4자리를 정확하게 입력하세요.";
        birthYear.focus();
    } else if (birthMonth.value === "월") {
        uBirthChk.innerText = "태어난 월을 선택하세요.";
    } else if (birthDay.value == "") {
        uBirthChk.innerText = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
        birthDay.focus();
    }  else {
        uBirthChk.innerText = "";
    }
}

// 6. 성별 공백 검사

let gender = document.querySelector(".gender");
gender.addEventListener('blur',Chk_gender);

function Chk_gender() {
let genderChk = document.querySelector("#genderChk");
    if (gender.value == "") {
        genderChk.innerText = "필수 정보입니다.";
    } else {
        genderChk.innerText = "";
    }
}

// 7. 이메일 오류 검사

let email = document.querySelector("#email");
email.addEventListener('blur',Chk_email);

function Chk_email() {
    let emailVal = email.value;
    emailVal = emailVal.trim();
    let emailChk = document.querySelector("#emailChk");
    let emailIcon = emailVal.indexOf("@");
    let dotIcon = emailVal.indexOf(".");
    let userChk = emailVal.substring(0,emailIcon);

        if (emailVal == "") {
            emailChk.innerText = "";
        } else if (emailIcon < 0 || emailIcon < 1 || dotIcon < 1 || emailIcon > dotIcon || userChk == "") {
           emailChk.innerText = "이메일 주소를 다시 확인해주세요.";
        } else {
            emailChk.innerText = "";
        }
    }

// 8. 전화번호 공백 검사

let uNum = document.querySelector("#uPhoneNum");
uNum.addEventListener('blur',Chk_num);


function Chk_num() {
let uNumChk = document.querySelector("#uNumChk");
    if (uNum.value == "") {
        uNumChk.innerText = "필수 정보입니다.";
    } else {
        uNumChk.innerText = "";
    }
}

// 9. 가입 버튼 활성화

let subBtn = document.querySelector("#submit");
subBtn.addEventListener('click',submitFrm);
subBtn.addEventListener('onkeydown',enterkey);
let frm = document.querySelector("#frm");

function allChk() {
    Chk_id();
    Chk_pw();
    Chk_pwT();
    Chk_name();
    Chk_birth();
    Chk_gender();
    Chk_email();
    Chk_num();
}

function submitFrm() {
    allChk();
    if (allChk === true) {
        frm.action = "https://www.naver.com";
        frm.submit();
    }
}

// 10. 가입 버튼 엔터키 활성화

function enterkey() {
    if (window.event.keyCode == 13) {
        submitFrm();
    }
}
