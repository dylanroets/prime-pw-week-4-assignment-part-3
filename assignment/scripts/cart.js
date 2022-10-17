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
addItem('kiwi')
console.log(basket);