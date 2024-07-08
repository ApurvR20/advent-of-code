let func = () => {
    const arr = document.querySelector('pre').textContent.split('\n');
    arr.pop();

    const lightGrid = Array(1000).fill().map(() => Array(1000).fill(false));

    arr.forEach(ele => {

        const instruction = ele.match(/on|off|toggle/g)[0];
        const [r1,c1,r2,c2] = ele.match(/\d+/g).map(e => parseInt(e));

        for(let i = r1; i <= r2; i++)
        {
            for(let j = c1; j <= c2; j++)
            {
                if(instruction === "on")
                {
                    lightGrid[i][j] = true;
                }
                else if(instruction === "off")
                {
                    lightGrid[i][j] = false;
                }
                else lightGrid[i][j] = !lightGrid[i][j];
            }
        }
        
    });

    let res = 0;

    for(let i = 0; i < 1000; i++)
    {
        for (j = 0; j < 1000; j++)
        {
            if(lightGrid[i][j])
            {
                res++;
            }
        }
    }

    return res;
};
func();

