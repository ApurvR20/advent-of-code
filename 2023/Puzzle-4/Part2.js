let func = () => {
    
    const arr = document.querySelector('pre').textContent.split('\n');
    arr.pop();
    const len = arr.length;
    const cards = Array(len);
    cards.fill(1);
    let newCards;

    for(let i = 0; i < len; i+=1)
    {
        newCards = 0;
        const numbers = arr[i].split(/:|\|/);
        numbers.shift();
        numbers[0] = numbers[0].trim().split(/ +/);
        numbers[1] = numbers[1].trim().split(/ +/);
        console.log(numbers);
        numbers[0].forEach(n => {

            if(numbers[1].includes(n))
            newCards+=1;
        })

        while(newCards)
        {
            cards[i+newCards]+=cards[i];
            newCards-=1;
        }
    }

    return cards.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      },0);
}

func();