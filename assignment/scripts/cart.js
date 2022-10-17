console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem(item){
    console.log('in addItem', item);
    basket.push(item);
    return true;
}
console.log('Test adding fruit', addItem('apple'));
addItem('banana');
console.log(basket);
addItem('kiwi');
console.log(basket);
addItem('lemon');
console.log(addItem('jackfruit'));
console.log(basket);
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
//end testing for addItem

//start listItems
function listItems(basket){
    for (item of basket){
        console.log('Basket Item: ', item);
    }
    return 'Those are all of the items';
    
}
console.log(listItems(basket));
//not sure why im getting an undefined after the list
//nevermind have to do a return in the function and proper syntax with brackets

//empty function
function empty(basket){
    while (basket.length > 0) {
        basket.pop();
    }
    return 'Basket Emptied';
}
console.log(empty(basket));
console.log('Double check the basket array has nothing:', basket);