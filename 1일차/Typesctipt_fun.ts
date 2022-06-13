//function에 대해서 call signatures, polymorphism, overloading generics
/*function add(a:number,b: number){
    return a+b
}
*/
// call signatures는 함수 위에 마우스 커서를 올렸을때 보게되는것
const add = (a:number, b:number) => a+b

type Add = (a:number,b:number) => number;
const ab:Add = (a,b) => a+b

//overloading function overloading 또는 method 뭐시기 라고도 부름 
//위의 코딩을 바꿔보면 

type ADD = {
    (a:number, b:number): number
}
// 이렇게 가능한 이유는 오버로딩이되기 때문이다.
// 오버로딩은 함수가 여러개의 call signature를 가지고 있을때 발생


type addd ={
    (a:number,b:number):number
    (a:number,b:string):number
}

const fist:addd = (a,b) => {
    if(typeof b ==="string") return a
    return a+b
}

//next.js는 push를 하는데 string 값으로 home을 주면 Router.push("/home")
type Config = {
    path: string,
    state: object
}
type Push = {
    (path:string): void
    (config:Config):void
}

const push:Push = (config) =>{
    if (typeof config === "string"){console.log(config)}
    else{
        console.log(config.path, config.state)
    }
}

//
type ADd = {
    (a:number, b:number): number
    (a:number, b:number, c:number): number,
}

// c의 signature가 a,b 에 대한 옵션이기때문에 c 값이 있을때 a+b+c 리턴해주는것 아닐시 리턴 a+b
// call signature들이 파라미터의 개수가 다른 경우 
const ad:ADd = (a,b,c?:number) => {
    if(c) return a+b+c
    return a+b
}

ad(1,2)
ad(1,2,3)
// 정상작동 


