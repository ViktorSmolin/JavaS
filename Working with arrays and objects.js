const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 100000
}

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;
    data.shops.forEach(element => {
        square += element.width * element.length
    });

    volume += data.height * square; 

    if ( volume * data.moneyPer1m3 < data.budget ){
        console.log("денег хватит");
    }else{
        console.log("денег не хватит");
    }

}

isBudgetEnough(shoppingMallData);