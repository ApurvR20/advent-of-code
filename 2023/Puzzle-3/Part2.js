let func = () => {

    const arr = document.querySelector('pre').textContent.split('\n');
    arr.pop();
    let lenArr = arr.length;
    let lenStr = arr[0].length;
    let i,j;
    let partNums = [];
    let sum = 0;

    const extractNum = (i,j) => {
        
        if(i < 0 || i === lenArr || j < 0 || j === lenStr || isNaN(arr[i][j]))
        return 0;
        
        let res = arr[i][j];

        let count = j-1;
        while(count >= 0 && !isNaN(arr[i][count]))
        {
            res = arr[i][count]+res;
            count-=1;
        }

        count = j+1;
        while(count < lenStr && !isNaN(arr[i][count]))
        {
            res+=arr[i][count];
            count+=1;
        }
        console.log(`res = ${res}`);
        return parseInt(res);   
    }

    const pushVal = (n) => {

        if(n > 0)
        partNums.push(n);
    }

    for(i=0;i<lenArr;i+=1)
    {
        for(j=0; j<lenStr; j+=1)
        {
            let val = 0;
            if(arr[i][j] === '*')
            {
                val = extractNum(i-1,j);
                pushVal(val);
                if(val == 0)
                {
                    pushVal(extractNum(i-1,j-1)); pushVal(extractNum(i-1,j+1));
                }

                pushVal(extractNum(i,j+1));
                pushVal(extractNum(i,j-1));

                val = extractNum(i+1,j);
                pushVal(val);
                if(val == 0)
                {
                    pushVal(extractNum(i+1,j-1));
                    pushVal(extractNum(i+1,j+1));
                }

                if(partNums.length === 2)
                sum+=(partNums[0]*partNums[1]);

                partNums = [];
            }
        }
    }

    return sum;
}

func();