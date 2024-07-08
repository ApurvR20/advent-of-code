let func = () => {
    const arr = document.querySelector('pre').textContent.split('\n');
    arr.pop();

    const lightGrid = Array(1000).fill().map(() => Array(1000).fill(0));

    arr.forEach(ele => {

        const instruction = ele.match(/on|off|toggle/g)[0];
        const [r1,c1,r2,c2] = ele.match(/\d+/g).map(e => parseInt(e));

        for(let i = r1; i <= r2; i++)
        {
            for(let j = c1; j <= c2; j++)
            {
                if(instruction === "on")
                {
                    lightGrid[i][j]+=1;
                }
                else if(instruction === "off" )
                {
                    if(lightGrid[i][j] > 0)
                    {
                        lightGrid[i][j]-=1;
                    }
                }
                else lightGrid[i][j]+=2;
            }
        }
        
    });

    let res = 0;

    for(let i = 0; i < 1000; i++)
    {
        for (j = 0; j < 1000; j++)
        {
            res+=lightGrid[i][j];
        }
    }

    return res;
};
func();

