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

        sum+=( 3*a*b + 2*b*c + 2*a*c );
    })

    return sum;
}


let str = `Put your input here`;

console.log(func(str));