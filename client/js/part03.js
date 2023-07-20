// ? Swiper.js

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

const swiper = new Swiper('.swiper',{ // overflow: hidden
  autoplay: {
    disableOnInteraction: false,
  },  // true
  loop: true,
  speed:2000,
  pagination:{
    el:'.pagination',
    clickable:true,
    bulletClass:'bullet',
    bulletActiveClass:'is-active',
    renderBullet: function(index,className){
      return /* html */`
        <span class="${className}">
          <img src="./assets/part01/${data[index].src}" alt="${data[index].alt}" />
        </span>
      `
    }
    // renderBullet함수가 자동으로 bulletClass를 읽어서 className이 인식
    // Navigation: button: pill, 자동재생 밑 동그라미들: bullet, 
  }
}) // 2번째 옵션


const title = document.querySelector('h3');

swiper.on('slideChange',function(e){  // Event will be fired when currently active slide is changed
  console.log( e.activeIndex );
  //슬라이드 한 바퀴 돌고 다음 loop 돌면서 active-index가 잘못 나오는 게 맞는 건가요? -> realIndex 사용 권장

  title?.classList.remove('is-active'); // ? : 옵셔널 체이닝 - 작동 X = 오류 X.

})

.on('slideChangeTransitionEnd',function(e){
  console.log('슬라이드 애니메이션 끝 !');
  title?.classList.add('is-active');  // Event will be fired after animation to other slide (next or previous).
})