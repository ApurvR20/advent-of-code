// too high
let func = () => {
    const str = document.querySelector('pre').textContent;
    const len = str.length;
    let x = 0;
    let y = 0;
    let totalHouses = 0;
    
    const houseMap = {0 : new Set()};
    houseMap[0].add(0);
    for(let i = 0; i < len; i++)
    {
        if(str[i] === '^')
        {
            y++;
        }
        else if(str[i] === 'v')
        {
            y--;
        }
        else if(str[i] === '>')
        {
            x++;
        }
        else x--;

        if(!Object.hasOwn(houseMap, x))
        {
            houseMap[x] = new Set();
        }
        
        houseMap[x].add(y);
    }

    console.log(houseMap);

    for (const key in houseMap)
    {
        totalHouses+=houseMap[key].size;
    }
    return totalHouses;
};
func();