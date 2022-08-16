// code your solution here
function saturdayFun(saturday = 'roller-skate'){
    return `This Saturday, I want to ${saturday}!`
}


function mondayWork(activiy = "go to the office"){
    return `This Monday, I will ${activiy}.`;
}

mondayWork()
mondayWork("I will work from home")



function wrapAdjective(special = "*"){
    return function(innerFunction = "awesome"){
        return `You are ${special}${innerFunction}${special}!`;
    };
};
wrapAdjective()("a hard worker")
wrapAdjective("||")("a dedicated programmer")("||")