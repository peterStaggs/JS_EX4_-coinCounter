/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (money) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  coinPurse.quarter = Math.floor(money / 0.25);
  money -= (coinPurse.quarter * 0.25); 
  coinPurse.dime = Math.floor(money / 0.10);
  money -= (coinPurse.dime * 0.10); 
  coinPurse.nickel = Math.floor(money / 0.05);
  money -= (coinPurse.nickel * 0.05); 
  coinPurse.penny = Math.floor(money / 0.01);
  money -= (coinPurse.penny* 0.01); 
  return coinPurse
}


  var coins = coinCounter(2);
  console.log(coins);
  
  
