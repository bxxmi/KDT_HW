// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = +line;

// 아래에 getItemByAmount 함수를 작성하세요.
const getItemByAmount = (amount) => {
    // 사용자의 입력 유효값 범위 지정: 숫자가 아닌 경우, 0인 경우 null
    if(amount === false || amount === 0) {
        return null;
    }

    // filter, sort 함수 적용하여 입력한 값보다 저렴한 상품들의 리스트를 오름차순으로 정렬함
    const canBuyItems = data.filter(items => items.price < amount).
    sort((a, b) => b.price - a.price);

    // 만약, canBuyItems 변수에 값이 존재한다면 맨 처음 값을 반환하고 
    // 없다면 null 출력해라
    return canBuyItems ? canBuyItems[0] : null
};

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);
