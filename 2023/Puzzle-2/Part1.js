let func = () => {
    const arr = document.querySelector('pre').textContent.split('\n');
    arr.pop();
    let sum = 0;
    let count = 1;
    const obj = {"red" : 12, "green" : 13, "blue" : 14};
    arr.forEach((e) => {
        e = e.substring(e.indexOf(':')+2).split(/ |, |; /);
        const n = e.length;
        let i = 1;
        let flag = true;
        while(i < n && flag)
        {
            if(obj[e[i]] < e[i-1])
            {
                flag = false;
            }
            i+=2;
        }

        if(flag)
        {
            sum+=count;
        }

        count+=1;
    })

    return sum;
}