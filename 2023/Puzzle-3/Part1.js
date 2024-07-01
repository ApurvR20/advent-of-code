let func = () => {

    const arr = document.querySelector('pre').textContent.split('\n');
    arr.pop();
    let lenArr = arr.length;
    let lenStr = arr[0].length;
    let i,j,above,front,behind,under;
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

    for(i=0;i<lenArr;i+=1)
    {
        for(j=0; j<lenStr; j+=1)
        {
            if(isNaN(arr[i][j]) && arr[i][j] != '.')
            {
                above = front = behind = under = 0;
                
                above = extractNum(i-1,j);
                if(above == 0)
                {
                    above = extractNum(i-1,j-1) + extractNum(i-1,j+1);
                }

                front = extractNum(i,j+1);
                behind = extractNum(i,j-1);

                // check under
                under = extractNum(i+1,j);
                if(under == 0)
                {
                    under = extractNum(i+1,j-1) + extractNum(i+1,j+1);
                }

                console.log(`above=${above},under=${under},front=${front},behind=${behind}`);
                sum+=(above + under + front + behind);
            }
        }
    }

    return sum;
}

func();