// ? jQuery
/* // ? 요즘 사용빈도가 떨어지는 이유
1. 너무 무거움
2. pure javascript 잘 못 쓰는 사람이 별로 없음
3. javascript가 jquery (ajax. 비동기통신) 처럼 쉬워진다면?
    -> javascript를 쉽게 쓰기 위해 만들어졌지만, 매년 6월마다 javascript가 갱신중.
    -> 비동기통신: fetch API => Axios : 비동기 통신만 쓸 수 있도록 도구 분리
4. Single Page Application 불가능 - ajax 로는 쉽지 않음
    -> react, vue, anqular, svelt

총평: 생산성면에서 무시할 수 없기 때문에 현업에서 50% 이상 쓰이는 곳이 많음
 */

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

// ? 1. 이벤트 위임

// 메모리에 저장하지 않고 DOM 에서 계속 호출하는 방식을 많이 씀
// but, 이 엔진에서 이를 찾기 위해 DOM을 다 뒤지기 때문에 성능 저하가 됨. 따라서 변수 할당을 해주는게 좋으나 뽕맛..? 어라?...범쌤..ㅋㅋㅋ

/* $('.navigation').on('click', 'li', function(e){ // ^ .navigation 에 'click' 이벤트를 걸건데 'li' 요소에게만 걸어줘 + function
  e.preventDefault();

  console.log(this);

  // 바닐라 자바스크립트에서 생성한 유틸함수는 생성한 function
  // jquery 에서 제공해주는 method  *target.addClass

  const index = $(this).attr('data-index')
  // 반복문 필요 없음!!!
  $('.navigation > li').removeClass('is-active')

  // method 체이닝 (체인) - this 자신을 반환해주기 때문에 메서드 바로 사용가능
  $(this).addClass('is-active');  // .delay(1000).fadeOut(1000)

  $('.visual img').attr('src', `./assets/part01/${data[index-1].src}`);
  $('.visual img').attr('alt', data[index-1].alt);


  // return false;   // === e.preventDefault();
}); */

// const box = document.querySelector('.box);
// box.addClass()
// jQuery method => jquery object.addClass()
// this -> 순수 요소 + jquery메서드 못씀 ! 따라서, 제이쿼리화 = 제이쿼리 객체

// ? 2. 반복문 : 훨씬 쉬움 ! (li에 직접 걸기)

$(".navigation > li").click(function (e) {
  e.preventDefault();

  // $(this)시 제이쿼리 객체 반환 + 메서드 => index 추출 가능 : 0 1 2 3 (반복문)
  // 바닐라 자바스크립트
  /* const list = document.querySelectorAll('.navigation > li');

  list.forEach((li, index)=> {
    li.addEventListener(()=>{
      index
    }))
  } */

  const index = $(this).index(); // .index : 자동으로 순환하는 반복문의 index 가져옴

  $(".navigation > li").removeClass("is-active"); // 인수값 없을 시 모든 클래스 지움

  $(this).addClass("is-active");

  $(".visual img").attr({
    src: `./assets/part01/${data[index].src}`,
    alt: data[index].alt,
  });
});
