function explain_callBack(name, age, task){
    console.log('Hello ',name);
    console.log('Your age ',age);
    task();
}
function washHand(){
    console.log('Wash hand with soap');
}
function takeShower(){
    console.log('Take Shower');
}
function scrollFacebook(){
    console.log('Scroll Facebook');
}
explain_callBack('Sogir',17,washHand);
explain_callBack('Jogir',17,takeShower);
explain_callBack('Mogir',17,scrollFacebook);