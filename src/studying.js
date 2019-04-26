import React, { Component } from 'react';

const array = [1,2,3,4,5,6,7,8,9,0,1,23,12,3,443,534,533,2323,445,43,3,234,33,32,7,65]

// map
const mapArray = array.map(a => console.log(a));
console.log(mapArray)

const mapArray2 = array.map(a => `${a}`);
console.log(mapArray2);

const mapArrayContent = a => `a`;
const mapArray3 = array.map(mapArrayContent);
console.log(mapArray3);

const mapArray4 = array.map((a, index) => `${index} ${a}`)
console.log(mapArray4);


// filter
const filterArray = array.filter(a => a < 10);
console.log(filterArray);

const filterArray2 = array.filter(a => a.length > 1);
console.log(filterArray2);

const name = ["jhone", "bob", "elie"]
const filterArray3 = name.filter(a => a !== "bob");
console.log(filterArray3);
// bob을 제외한 모든 사람

// includes
let greeting = ["hello", "hi","what"];
// greeting 에 해당 string(hello)가 있는지 확인시켜주는 method
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array 
// 더 다양한 메서드를 알아야 한다.
if(!greeting.includes("hello")){
    greeting.push("hello");
}



class studying extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default studying;