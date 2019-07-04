const N = parseInt(readline())
let res = []

let cells = Array(N).fill().map(() => readline().split(' '))

cells.forEach((operation, indice) => calcul(indice))

function calcul(i_cell){
    if(i_cell in res)
        return res[i_cell]

    let cell = cells[i_cell]
    let operation = cell[0]
    let arg1 = cell[1]
    let arg2 = cell[2]
    
    let v_arg1 = arg1.includes('$') ? calcul(Number(arg1.substring(1))) : Number(arg1)
    let v_arg2 = arg2.includes('$') ? calcul(Number(arg2.substring(1))) : Number(arg2)
    
    let result = 0
    switch(operation){
        case 'ADD':
            result = v_arg1 + v_arg2
            break;
        case 'SUB':
            result = v_arg1 - v_arg2
            break;
        case 'MULT':
            result = v_arg1 * v_arg2
            break;
        case 'VALUE':
            result = v_arg1
            break;
        default:
            result = 0
    }
    res[i_cell] = result
    return result
}

console.log(res.join('\n'))