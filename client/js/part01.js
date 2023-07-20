// ? 바닐라 자바스크립트

const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];

/* 지침
// ? 1. navigation을 선택 후 이벤트 위임을 걸어주세요.
// ? 2. target은 li요소가 잘 나와야 합니다. - 인접한 요소들을 잘 찾는다.
*/

const navigation = document.querySelector(".navigation");
// const list = getNodes('.navigation li');  // * 3) me.하위 요소 찾을 시에 주의 !!! -> Nodelist 내장 중 이어서 forEach 돌릴 수 있음
// ? 3. 비주얼 안에 있는 이미지를 가져온다.
const visualImage = getNode('.visual img');
// const visualImage = document.querySelector('.visual img')


function handleSlider(e) {
  e.preventDefault(); // ? a 태그가 아닌 navigatio 영역 자체에 걸어주어야 함 + 질문참고
  
  /* e.target : 이벤트가 발생한 대상 객체
elem.closest : 주어진 CSS 선택자와 일치하는 요소를 찾을 때까지, 자기 자신을 포함해 위쪽(부모 방향, 문서 루트까지)으로 문서 트리를 순회 */

  const target = e.target.closest("li");
  const anchor = e.target.closest('a'); // ^ 3. 이미지

  if (!target || !anchor) return;

  // * 내가 선택한 li에게 is-active 클래스를 넣어주세요 (classList.add / addClass)
  // * 내가 선택하지 않은(모든 li) li에게 is-active 클래스 제거해주세요

  // 1. getNodes => nodeList
  // 2. children => htmlcollection  : 자식 요소들을 수집
  // 3. for, forEach => classList.remove ( removeClass )

  // 나의 풀이
/*   if (target) {
    for(let item of list){
      item.classList.remove("is-active");
    }
    target.classList.add("is-active");
  } */

  // * 3) for, forEach => classList.remove ( removeClass )
  /* list.forEach((li) => {
    removeClass(li, 'is-active')
  }) */

  // * 2) children => htmlcollection  : 자식 요소들을 수집
  // navigation, this, e.currentTarget : Symbol.iterator (for..of문 사용 가능)
  // Array.prototype.forEach.call() 기능 빌려쓰기 가능
  const list = [...navigation.children];  // ^ 유사배열 -> 배열 : forEach 사용가능
  const index = attr(target, 'data-index'); // ^ 3. 이미지

  list.forEach((li) => removeClass(li, 'is-active'));

  addClass(target, 'is-active');

  // ^ 3. 이미지 처리
  // visualImage.setAttribute('src', `./assets/part01/${data[index-1].src}`);  // setAttribut : 속성을 setting
  // visualImage.setAttribute('alt', data[index-1].alt);

  attr(visualImage, 'src', `./assets/part01/${data[index-1].src}`);
  attr(visualImage, 'alt', data[index-1].alt);
  // ^ 현재의 경우 anchor.alt 에서 가져오면 되나, 비동기통신에서는 서버에서 직접이를 가져와야 함 (데이터베이스) -> 따라서, 가져왔다는 가정 하에 상단의 data 변수 참고 

  /*  함수를 변경한다면? -> 이를 jQuery로 하자
 attr(target, {
    'src':'aaa',
    'alt':'~~~'
  })

  if(typeof prop === 'object'){
    구조분해 할당 때려서 값 가져와 버리자~~~~~
  } */

}

navigation.addEventListener("click", handleSlider);
// ()가 있으면 <event>없이도 바로 실행되어 버림


// 선택한 대상의 data-index값을 가져와주세요.

// ? 3. 비주얼 안에 있는 이미지를 가져온다.
// 이미지의 src 속성에 접근한다.
// src의 값을 index로 바꾼다.
// alt 값을 변경한다.
