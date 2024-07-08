// too high
let func = (input) => {
    
    const inputArr = input.split('\n');
    const l = inputArr[0].length;
    let flagPalin = false;
    let flagRepeat = false;

    let res = 0;

    inputArr.forEach(ele => {

        flagRepeat = false;
        flagPalin = false;

        for(let i = 0; i < l-2 && !flagPalin ; i++)
        {

            if(ele[i] === ele[i+2])
            {
                flagPalin = true;
            }
        }

        // The regex returns the first string which starts and ends with the same repeated substring
        // read backreference, it is used to match a previously "\n" captured group.

        flagRepeat = ele.match(/([a-z]{2}).*\1/);

        if(flagPalin && flagRepeat)
        {
            res+=1;
        }        
    });

    console.log(res);
};

func(`Enter your value here`);