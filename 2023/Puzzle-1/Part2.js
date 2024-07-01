let func = () => {
    const arr = document.querySelector('pre').textContent.split('\n');
    arr.pop();
    console.log(arr);
    let sum = 0;
    arr.forEach((e) => {
        let n = e.length;
        let num = '';
        let i = 0;
        // first occurence
        while(i < n)
        {
            if(e[i] >= '0' && e[i] <='9') // numeral
            {
                num+=e[i];
                break;
            }
            else if(e[i] === 'o' && e.substring(i,i+3) === 'one') // 1
            {
                num+='1';
                break;
            }
            else if(e[i] === 't') // 2,3
            {
                if(e.substring(i,i+3) === 'two')
                {
                    num+='2';
                    break;
                }
                else if(e.substring(i,i+5) === 'three')
                {
                    num+='3';
                    break;
                }
            }
            else if(e[i] === 'f') // 4,5
            {
                let s = e.substring(i,i+4);
                if(s === 'four')
                {
                    num+='4';
                    break;
                }
                else if(s === 'five')
                {
                    num+='5';
                    break;
                }
            }
            else if(e[i] === 's') // 6,7
            {
                if(e.substring(i,i+3) === 'six')
                {
                    num+='6';
                    break;
                }
                else if(e.substring(i,i+5) === 'seven')
                {
                    num+='7';
                    break;
                }
            }
            else if(e[i] === 'e' && e.substring(i,i+5) === 'eight') // 8
            {
                num+='8';
                break;
            }
            else if(e[i] === 'n' && e.substring(i,i+4) === 'nine') // 9
            {
                num+='9';
                break;
            }

            i+=1;               
        }

        // last occurence
        let e_org = e;
        e = e.split('').reverse().join('');
        i = 0;
        while(i < n)
        {
            if(e[i] >= '0' && e[i] <='9')
            {
                num+=e[i];
                break;
            }
            else if(e[i] === 'e') // 1,3,5,9
            {
                if(e.substring(i,i+3) === 'eno')
                {
                    num+='1';
                    break;
                }
                else if(e.substring(i,i+4) === 'evif')
                {
                    num+='5';
                    break;
                }
                else if(e.substring(i,i+4) === 'enin')
                {
                    num+='9';
                    break;
                }
                else if(e.substring(i,i+5) === 'eerht')
                {
                    num+='3';
                    break;
                }

            }
            else if(e[i] === 'o' && e.substring(i,i+3) === 'owt') // 2
            {
                num+='2';
                break;
            }
            else if(e[i] === 'r' && e.substring(i,i+4) === 'ruof') // 4
            {
                num+='4';
                break;
            }
            else if(e[i] === 'x' && e.substring(i,i+3) === 'xis') // 6
            {
                num+='6';
                break;
            }
            else if(e[i] === 'n' && e.substring(i,i+5) === 'neves') // 7
            {
                num+='7';
                break;
            }
            else if(e[i] === 't' && e.substring(i,i+5) === 'thgie') // 8
            {
                num+='8';
                break;
            }
            
            i+=1;               
        }

            console.log(e_org,num);
            sum+=parseInt(num, 10);
        
    })

    return sum;
}