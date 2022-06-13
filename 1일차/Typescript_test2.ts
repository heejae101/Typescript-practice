/* readonly 속성 
요소들을 읽기 전용으로 만들 수 있다.
*/
type Age = number;
type Name = string;

type Player = {
    readonly name:Name,
    age?:Age
}

// 이 예제를 통해 불변성(immutability) 을 알 수 있다. 
// 값을 변경하는건 안되지만 map같은건 할 수 있음
const playernaker = (name:string): Player => ({name})
const nico = playernaker("nico")
nico.age = 12 
//nico.name = "asd"

const numbers : readonly number[] = [1,2,3,4]
//numbers.push(1)

//readonly Tuple
const play : [string,number,boolean] = ["sd",2,false]

let q : undefined = undefined
let w : null = null

//any는 비어있는 값임 Typescript 에서 javascript처럼 바보짓 할때 씀 아무타입이나 다됨
// 추가할 수 있는 규칙이 있음 
const qw : any [] = [1,2,3,4]
const qq : any = true

qw+qq