/* 타입 스크립트를 쓰는 이유 --> 안정성 때문이다.
안정성이 보장되면 코드의 버그가 엄청 줄여지고 생상성도 늘어난다.

예로 들어 자바 스크립트에서 
[1,2,3,4] 라는 배열과 False라는 불리언 값을 더하는 소스코드를 작성하면
[1,2,3,4]+False
결과값: 1,2,3,4False 이렇게 나온다. 다른 언어에서는 실행조차 안될텐데 자바스크립트에서는 가능하다..

또 다른 예로 나누는 함수를 작성하면 
function divide (a,b){
    return a/b
}
divide("asfa")
이럴 경우 에러가 발생하지 않고 값이 없다고만 나온다..

마지막으로 
const nico = {name:"nico"}
nico.hello()
여기서는 런타임 에러가 발생되는데 처음부터 nico 라는 상수안에 hello가 없다고 먼저 처리해주면 
오류를 빠르게 알아채고 처리할땐데.. 실행부터 시킨다.
다른 언어는 실행시키지도 않고 컴파일 자체를 안한다..

이런 단점을 보완하기 위해 나온 프로그래밍 언어가 타입스크립트이다.
타입스크립트는 코드가 자바코드로 변환된다.
*/


let a : number[] = [1];
let b : string []= ["il"];
let c : boolean[] = [];
// 어떨때는 그냥 자동 추론이 좋을때가 있음 

const player ={
    name:"nico"
}

// undefined 값이 없을 수도 있다 라는 뜻 ?는 숫자형일수도 있고 undefied 값
// 일 수도 있다는 뜻
const player2:{
    name1:string,
    age?: number
} ={
    name1:"heejae",
    age : 23
}

// player.age는 값이 있어야한다라는 뜻
if (player2.age && player2.age < 10){
    
}

// 타입을 설정 해 코드 재사용율을 높힘
type player3 = {
    name3:string,
    age3:number
}

const hee : player3 = {
    name3:"sad",
    age3:22
}

// type 으로 나이랑 이름 먼저 선언해줄 수도 있음
type age = number;
type name = string;

type player4 = {
    name:name,
    age:age
}

//함수에서는 리턴하는 타입만 안다면 되게 유용하다.

function playerMaker (name:string) : player4 {
    return{
        name,
        age
    }
}
const nico1 = playerMaker("nico21")
nico1.age = 12

/* 선택적 타입 만들기
Alias 타입을 생성하는방법 
type player = { name : string } 이런거 
argument 타입 지정하는 방법 
playerMaker (name:string) 같은거
return 타입 정하기
playerMaker (name:string) : Player 4 이러면 Player4에 대한 값으로 리턴을 설정해 준게됨

const playerMaker = (name:string) : player => ({name})
argument 값과 return 값을 같이 정해주는 코드 
*/


