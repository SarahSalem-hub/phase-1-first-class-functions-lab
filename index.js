// Code your solution in this file!
function returnFirstTwoDrivers(driversArray){
     const returnFirstTwoDrivers = (driversArray)=>{
        let newArr = []
        newArr.push(driversArray[0])
        newArr.push(driversArray[1])
        return newArr
        
    }
   return returnFirstTwoDrivers(driversArray)
}

function returnLastTwoDrivers(driversArray){
    const returnLastTwoDrivers = (driversArray)=>{
        let newArr = []
        newArr.push(driversArray[driversArray.length-2])
        newArr.push(driversArray[driversArray.length-1])
        return newArr
        
    }
   return returnLastTwoDrivers(driversArray)
}
// console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(para){
    return function (para){
        return para * para
    }
}
function fareDoubler(para){
    const anotherFun = createFareMultiplier()
    return para * 2
}
function fareTripler(para){
    const unusedFun = createFareMultiplier()
    return para * 3 
}
function selectDifferentDrivers(driversArray, returnType){

   return returnType(driversArray)
}
