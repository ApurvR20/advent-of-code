let func = () => {
    
    const arr = document.querySelector('pre').textContent.split('\n');
    arr.pop();
    let sum = 0;
    
    arr.forEach(row => {

        let points = -1;
        const numbers = row.split(/:|\|/);
        numbers.shift();
        numbers[0] = numbers[0].trim().split(/ +/);
        numbers[1] = numbers[1].trim().split(/ +/);
        console.log(numbers);
        numbers[0].forEach(n => {

            if(numbers[1].includes(n))
            points+=1;
        })

        console.log(`points = ${points}`);
        if(points > -1)
        {
            sum+=Math.pow(2,points);
        }
    })

    return sum;
}

func();