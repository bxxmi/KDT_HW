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

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.
const getItemByAmount = (data, amount) => {
    // 사용자의 입력 유효값 범위 지정: 숫자가 아닌 경우, 0인 경우 null
    if(amount === false || amount === 0) {
        return null;
    }

    // 살 수 있는 상품을 저장하기 위한 변수
    let index;

    for(let i=0; i<data.length; i++) {
        // 조건: 사용자가 입력한 금액보다 상품의 가격이 더 비싼 경우
        if(amount < data[i].price) {
            // continue: 해당 항목을 제외하고 그 다음 항목과 비교하기 위함
            continue;
        } 
            // 그 외의 경우 사용자가 상품을 살 수 있기 때문에 해당 상품의 인덱스 번호가 저장됨
            index = i;
    }
    // 상품이 존재한다면 해당 상품의 데이터를 출력하고, 그게 아니라면 null을 출력
    return index !== null ? data[index] : null;
};

