// 상품 데이터
const data = [
    {name: '초콜렛', price: 2000},
    {name: '아이스크림', price: 1000},
    {name: '컵라면', price: 4000},
    {name: '볼펜', price: 2500},
    {name: '아메리카노', price: 4000},
    {name: '과자', price: 4000},
    {name: '탄산수', price: 1200},
    {name: '떡볶이', price: 3500},
    {name: '노트', price: 1500},
    {name: '껌', price: 500}
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = Number(line);                //parseInt 함수는 숫자 + 문자열 형태에 대응하기 어렵다.

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
        if (Number.isNaN(amount) === false) {
            if (goodsPrice <= amount) {             //입력값보다 작은 가격의 물품이 있고,
                if (goodsPrice > recommendPrice) {   //물품 가격이 현재 추천 가격보다 크다면
                    recommendPrice = goodsPrice;    //물품 가격을 추천 가격으로 올린다.
                }
            }
        } else {
            alert("숫자를 입력해주세요!")
            window.alert = null;              //alert창이 두 개 출력되는 오류 수정
            window.location.reload();
            return false;
        }
    }

    let recommendGoods = [];                  //추천 상품을 담을 recommendGoods 배열.
    for (let i = 0; i < data.length; i++) {
        if (recommendPrice === data[i].price) {     //데이터 내에서 추천 가격과 동일한 가격의 제품이 있다면
            recommendGoods.push(data[i]);   //추천 상품 배열에 넣어라.
        }
    }

    if (recommendGoods.length === 0) {         //recommendGoods에 담긴 값이 없어도 getItemByAmount함수가 true로 출력되는 오류 수정.
        return false;
    }

    let targetString = ''
    for (let i = 0; i < recommendGoods.length; i++){
            targetString += recommendGoods[i].name + ', '      //상품 이름을 문자열로 바꿔준다.
    }
    targetString = targetString.slice(0,-2);                   //문자열 마지막에 등장하는 ', '제거

    return {name: targetString, price: recommendPrice};       //추천 상품 정보 반환
}