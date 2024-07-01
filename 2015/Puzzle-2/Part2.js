let str = `put your input here`;

let func = (str) => {
    const arr = str.split('\n');
    let sum = 0;

    arr.forEach((e) => {

        let numsArray = e.split('x');
        let[a,b,c] = numsArray.map((x) => parseInt(x));

        let temp = 0;
        if(a > b)
        {
            temp = a;
            a = b;
            b = temp;
        }

        if(b > c)
        {
            temp = b;
            b = c;
            c = temp;

            if(a > b)
                {
                    temp = a;
                    a = b;
                    b = temp;
                }
        }

        sum+=( 2*(a+b) + a*b*c );
    })

    return sum;
}

console.log(func(str));