
function saturdayFun(event = 'roller-skate') {
    return `This Saturday, I want to ${event}!`;
  }

  function mondayWork(event = 'go to the office') {
      return `This Monday, I will ${event}.`;
  }

function wrapAdjective(msg, message = 'You are ') {
const innerFunc = function(worker = 'a hard worker'){
    return `${message}${msg}${worker}${msg}!`;
}
return innerFunc;
}
