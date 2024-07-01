
let func = () => {
    const str = document.querySelector('pre').textContent;
    const len = str.length;
    let x = 0;
    let x1 = 0;
    let y = 0;
    let y1 = 0;
    let totalHouses = 0;


    const mapUpdater = (x,y) => {

        if(!Object.hasOwn(houseMap, x))
        {
            houseMap[x] = new Set();
        }
        houseMap[x].add(y);
    }
    
    // update location of santa and robo-santa
    const locationUpdater = (char, i) => {

        let dx = 0;
        let dy = 0;

        if(char === '^')
        {
            dy = 1;
        }
        else if(char === 'v')
        {
            dy = -1;
        }
        else if(char === '>')
        {
            dx = 1;
        }
        else {
            dx = -1;
        }

        if( i%2 )
        {
            x1+=dx;
            y1+=dy;
            mapUpdater(x1,y1);
        }
        else {
            x+=dx;
            y+=dy;
            mapUpdater(x,y);
        }

    }

    const houseMap = {0 : new Set()};
    houseMap[0].add(0);
    for(let i = 0; i < len; i++)
    {
        locationUpdater(str[i],i);
    }

    for (const key in houseMap)
    {
        totalHouses+=houseMap[key].size;
    }
    return totalHouses;
};
func();