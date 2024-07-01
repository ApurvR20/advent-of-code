let func = () => {
    const arr = document.querySelector('pre').textContent.split('\n');
    arr.pop();
    let power = 0;
    arr.forEach((e) => {
        e = e.substring(e.indexOf(':')+2).split(/ |, |; /);
        const n = e.length;
        let i = 0;
        const obj = {"red" : 0, "green" : 0, "blue" : 0};

        while(i < n)
        {
            if(e[i] > obj[e[i+1]])
            {
                obj[e[i+1]] = parseInt(e[i]);
            }
            i+=2;
        }
        power+= (obj["red"]*obj["green"]*obj["blue"]);
    })

    return power;
}