let wireMap = {};

let func = (dest) => {

    const arr = document.querySelector('pre').textContent.split('\n');
    arr.pop();

    const d2s = {}; // dest2source map
    
    arr.forEach(ele => {

        const [source,dest] = ele.split(" -> "); 
        let operation = source.match(/\s*[A-Z]+\s*/);
        let sourceNodes = [source];

        if(operation)
        {
            operation = operation[0];
            sourceNodes = source.split(operation);
            if(sourceNodes.at(-1) === "")
            {
                sourceNodes.pop();
            }
            else if(sourceNodes.at(0) === "")
            {
                sourceNodes.shift();
            }
            operation = operation.trim();
        }

        
        d2s[dest] = {operation, sourceNodes};
    });

    const findWireValue = (destination) => {

        if(Object.hasOwn(wireMap,destination))
        return wireMap[destination];

        console.log(`dest = ${destination}`);

        if(!isNaN(destination))
        {
            return parseInt(destination);
        }
        
        const [s1,s2] = d2s[destination]['sourceNodes'];
        const operation = d2s[destination]['operation'];

        if(!operation)
        {
            wireMap[destination] = findWireValue(s1);
        }

        if(operation === 'OR')
        {
            wireMap[destination] = findWireValue(s1) | findWireValue(s2);
        }

        if(operation === 'AND')
        {
            wireMap[destination] = findWireValue(s1) & findWireValue(s2);
        }

        if(operation === 'NOT')
        {
            wireMap[destination] = ~ findWireValue(s1);
        }

        if(operation === 'LSHIFT')
        {
            wireMap[destination] = findWireValue(s1) << findWireValue(s2);
        }

        if(operation === 'RSHIFT')
        {
            wireMap[destination] = findWireValue(s1) >> findWireValue(s2);
        }

        return wireMap[destination];
    }

    return findWireValue(dest);

};

let res = func('a');
wireMap = {};
wireMap['b'] = res;

console.log(func('a'));