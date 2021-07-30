// 상품 데이터
const data = [
    {name: '초콜렛', price: 2000},
    {name: '아이스크림', price: 1000},
    {name: '컵라면', price: 1600},
    {name: '볼펜', price: 2500},
    {name: '아메리카노', price: 4000},
    {name: '과자', price: 3000},
    {name: '탄산수', price: 1200},
    {name: '떡볶이', price: 3500},
    {name: '노트', price: 1500},
    {name: '껌', price: 500}
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = +line;

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ?
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` :
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.
function getItemByAmount(data, amount) {
    let recommendPrice = 0;                     //추천 가격 0원으로 초기화
    for (let i = 0; i < data.length; i++) {
        const goodsPrice = data[i].price;
        if (goodsPrice <= amount) {             //입력값보다 작은 가격의 물품이 있고,
            if (goodsPrice > recommendPrice){   //물품 가격이 현재 추천 가격보다 크다면
                recommendPrice = goodsPrice;    //물품 가격을 추천 가격으로 올린다.
            }
        }
    }

    const recommendGoods = [];                  //추천 상품을 담을 recommendGoods 배열.
    for (let i = 0; i < data.length; i++) {
        if (recommendPrice === data[i].price) {     //데이터 내에서 추천 가격과 동일한 가격의 제품이 있다면
            recommendGoods.push(data[i]);           //추천 상품 배열에 넣어라.
        }
    }

    return recommendGoods[0];       //추천 상품 정보 반환
}

//challenge: 1. 만약 같은 가격의 물품이 여러가지 있다면?