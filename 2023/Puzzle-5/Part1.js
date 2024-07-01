/*
Procedure : 
- Parse the input into an array of array of strings (arr).
- Seeds[] hold the OG seeds as an array of int
- Seeds[] are passed as source to newSourceGen. It converts the current source into new sources which are placed back into Seeds[], using the function(map) provided in the input, stored in arr. 
- Seeds[] is used on each map, until it stores the locations for the seeds.
- The minimum location is returned.
*/

let func = () => {
    const arr = document.querySelector('pre').textContent.split('\n\n');

    const seeds = arr[0].split(/: | /);
    seeds.shift();
    arr.shift();
    let len = seeds.length;
    for(let i = 0; i < len; i+=1)
    {
        seeds[i] = parseInt(seeds[i],10);
    }

    const destParser = (str) => {

        let val = str.split('\n');
        val.shift();
        val = val.map(e => e.split(' ').map(ele => parseInt(ele,10)))

        return val;
    }

    const newSourceGen = (destArr) => {

        for(let i = 0; i < len; i++)
        {
            let destLen = destArr.length;
            for(let j = 0; j < destLen; j++)
            {
                let source = destArr[j][1];
                let dest = destArr[j][0];
                let range = destArr[j][2];

                // Calculating new sources
                if(seeds[i] >= source && seeds[i] <= source+range)
                {
                    seeds[i] = seeds[i]+dest-source;
                    break;
                }
            }
        }
    }

    arr.forEach(e => newSourceGen(destParser(e)));

    return Math.min(...seeds);
}

func();