let func = (input) => {
    
    const inputArr = input.split('\n');
    const vowelSet = new Set(['a','e','i','o','u']);
    const naughtySet = new Set(['ab','cd','pq','xy']);
    const strlen = inputArr[0].length;
    let flagTwice = false;
    let flagNaughty = true;
    let vowelCount = 0;

    let res = 0;

    inputArr.forEach(ele => {

        flagTwice = false;
        flagNaughty = false;
        vowelCount = 0;

        for(let i = 0; i < strlen; i++)
        {          
            if(i < strlen-1)
            {
                if(naughtySet.has(ele.slice(i,i+2)))
                {
                    flagNaughty = true;
                    break;
                }

                if(!flagTwice && ele[i] === ele[i+1])
                {
                    flagTwice = true;
                }                
            }

            if(vowelSet.has(ele[i]))
            {
                vowelCount++;
            }
        }

        if(!flagNaughty && vowelCount > 2 && flagTwice)
        {
            res+=1;
        }        
    });

    console.log(res);
};

func(`Enter input here`);