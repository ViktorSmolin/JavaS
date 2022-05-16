
function counting_fibonacci (numberOfIterations) {

    let a = 0;
    let b = 1;

    for (let i = 0; i < numberOfIterations; i++){
            
        a = a + b;

        b = a - b;
       

       console.log(a);
    }

}

counting_fibonacci(10);

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return  console.log(result);
}

fib(5)