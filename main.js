window.onload = function () {
    b1.onclick = function () {
        name = prompt("이름을 입력하세요.")
        document.getElementsByClassName("name")[0].innerHTML = "이름 :" + name;
    };
    b2.onclick = function () {
        number = prompt("전화번호를 입력하세요.")
        document.getElementsByClassName("number")[0].innerHTML = "전화번호 :" + number;
    };
    b3.onclick = function () {
        age = prompt("나이를 입력하세요.")
        document.getElementsByClassName("age")[0].innerHTML = "나이 :" + age;
    };
    b4.onclick = function () {
        addr = prompt("주소을 입력하세요.")
        document.getElementsByClassName("addr")[0].innerHTML = "주소 :" + addr;
    };
    b5.onclick = function () {
        mbti = prompt("mbti을 입력하세요.")
        document.getElementsByClassName("mbti")[0].innerHTML = "성향 :" + mbti;
    };
};