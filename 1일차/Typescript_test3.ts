// typescript에만 있는 자료형 Type Checker와 소통가능

// unkown
let qqq : unknown;

//let www : qqq + 1

if(typeof qqq === 'number'){
    let www = qqq+1
}

if(typeof qqq === 'string'){
    let www = qqq.toUpperCase();
}

//void return 값을 안해도 됨 void는 따로 선언을 하지않아도 
//아무것도 안한다는걸 자동 인식함  써준다면 이런식 function heel() : void 
function heel(){
    console.log('x')
}

//never 함수가 절대 return하지 않을 때 발생 
//타입이 두가지 일 수도 있는 상황에 발생할 수 있다.

function hello() : never{
    throw new Error("xxx")
}

// 타입을 두개 주고 실행 하는데 절대 실행 되지 않아야하는 값이 never가 됨
function heelo(name:string|number){
    if (typeof name == "string"){
        name
    }else if (typeof name === "number"){
        name
    }else{
        name
    }
}
