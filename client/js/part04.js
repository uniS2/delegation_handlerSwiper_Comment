// ? 바닐라 자바스크립트

const contents = getNode(".contents");
const textField = getNode("#comment37");
const commentContainer = getNode(".comment_container");

// 누른 대상을 찾기
// 누른 대상의 data-name 값 찾기
// 고유 숫자 - 비동기 통신에서 받아온 고유 숫자 : 서버 아이디와 로컬 아이디 비교해서 지울 때 사용
function createComment(user, value) {
  const template = /* html */ `
  <div class="id" data-comment-id="${Date.now()}">
      <div class="profile_img border_over"><img src="./assets/part03/ear.jpg" alt=""></div>
      <div class="comment_field">
          <div class="text_container">
              <div class="name"><a href="#">${user}</a></div>
              <div class="text_field">${value}</div>
          </div>
      </div>
  </div>
`;
  return template;
}

// ^ nodeName : Node현재 노드의 이름을 문자열로 반환
// input.value =''
// element.textContext = ''
function clearContents(target) {
  if (target.nodeName === "INPUT" || target.nodeName === "TEXTAREA") {
    target.value = "";
    return;
  }

  target.textContext = ""; // 나머지는 value가 없다
}

function endScroll(target) {
  target.scrollTop = target.scrollHeight;
  return target.scrollTop;
}

const handleArticle = (e) => {
  let target = e.target;
  let name = target.dataset.name;
  // console.log(e.target, e.currentTarget)

  while (!name) {
    target = target.parentElement; // name 재할당 필요; parentNode, parentElementNode: 주석 포함 노드 다 찾음
    name = target.dataset.name;

    if (target.nodeName === "BODY") {
      // nodeName은 대문자로 반환
      target = null;
      return;
    }
  }

  // active

  if (name === "like") toggleClass(target, "active");
  // target.classList.add('active');
  // addClass(target, "active");
  if (name === "more") toggleClass(target, "active");

  if (name === "comment") {
    textField.focus();
  }

  if (name === "send") {
    e.preventDefault();

    let value = textField.value;

    if (value === "") return;

    insertLast(commentContainer, createComment("uniS2", value));

    clearContents(textField);

    // scrollHeight, scrollTop
    endScroll(commentContainer);
  }
};

/* 
[지수님]
let value = textField.value;
를 하면 value 안에 값이 할당이 돼서 '안녕' 이라는 문자열이
들어가게 되는데
value = '' 일떄 value 안에 '안녕' 이라는 문자열이 들어가서
문자열 '안녕' = '' => 값에 값이 들어가는거니까 안 된다

[경민님]
 textFiled가 const로 선언을 했으니깐 cost벨류를 let value에 할당했으니깐 let value 변수가 값을 수정할 수 없으니
 cost인 textfiled의 값을 변경해야만 작동하는게 아닐까 라는 개인적인 생각입니나


[민성님]
value = textField.value라서
textField.value의 주소가 1이면
value의 주소는 2인데 
2의 주소에 1의 값을 복사했다고 보면 될거같아요

근데 우리가 비우고자 하는 곳이
주소 1의 공간인데
주소 2의 공간을 비워줘도 소용이 없으니까

value = '';를 해주면 주소2의 공간이 비워져서 value값만 비워지고 textField.value(주소1)은 안비워지고
그래서 textField.value를 해줘야 하는


[나]
위에 name 재할당 하는 것처럼
변수 value는 입력해준 시점의 값 반환해주는 용도 (send 호출)
textfield.value는 현재 input필드에 보이는 (값) 용도이니까 textfield.value에 빈문자열을 넣어주어야 한다 - 라고 생각했어요
*/

contents.addEventListener("click", handleArticle);

//made by kindtiger
