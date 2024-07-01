let func = () => {
    const arr = document.querySelector('pre').textContent.split('\n');
    console.log(arr);
    let sum = 0;

    arr.forEach((e) => {

        if(e.length > 0)
        {
            let num = '';
            let i = 0;
            while(e[i] < '0' || e[i] > '9')
            {
                i+=1;
            }
            num+=e[i];

            i = e.length - 1;
            while(e[i] < '0' || e[i] > '9')
            {
                i-=1;
            }
            num+=e[i];
            console.log(num);
            sum+=parseInt(num, 10);
        }
    })

    return sum;
}