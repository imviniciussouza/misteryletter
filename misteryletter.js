let symbol = [".", ",", ":", ";", "!"]
let symbolNumbers = [1,5,10,50,100]
//the part above I did so i would get the index of the given symbol, say "." and then retrieve the corresponding item in the symbolNumbers array
let example = "...,."
exampleX = example.split("") //i create another array with the split items
let symbolIndex = []


let newArr = function (){ //this function will decode, that is, turn the dots into an array
    let arr = []
    for (let i = 0; i< exampleX.length; i++){
        symbol.includes(exampleX[i]) ? arr.push(symbolNumbers[symbol.indexOf(exampleX[i])]) : console.log("do nothing")
    } return arr
}
// this function will apply the rule. the rule is(readme) file
let arr = newArr()

function convertToRule(){
    let newArr = []
    for (let i = 0; i< arr.length; i++){
        if (arr[i] === 0){
            newArr.push(arr[i])
        } else if (arr[i] > arr[i-1]) {
            newArr.push(arr[i]*-1)
        } else if (arr[i] === arr[i]){
            newArr.push(arr[i])
        }
    } return newArr
}
console.log(`Código decodificado [${convertToRule()}]`);


function finalResult() {
    let arr = convertToRule()
    let total =0;
    for (let i = 0; i < arr.length; i++){
    
    total += arr[i];
} return total
}

console.log("O resultado do código é: "+finalResult())







