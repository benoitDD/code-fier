const N = parseInt(readline())

let cells = Array(N).fill().map(() => readline().split(' '))

let res = []

let event = {
    events: Array(N).fill().map(() => []),
    on: function(indice, callback){
        if(!indice.includes('$'))
            return callback(Number(indice))
        
        let i = Number(indice.substring(1))
        if(i in res)
            return callback(res[i])
        
        this.events[i].push(callback)
    },
    emit: function(indice, value){
        for(let c of this.events[indice])
            c(value)
        res[indice] = value
        this.events[indice] = []
    }
}

function calcul(i_cell){
    let cell = cells[i_cell]
    let operation = cell[0]
    let arg1 = cell[1]
    let arg2 = cell[2]
    
    event.on(arg1, v_arg1 => {
        if(operation === 'VALUE')
            return event.emit(i_cell, v_arg1)
        event.on(arg2, v_arg2 => {
            let res
            switch(operation){
                case 'ADD':
                    res = v_arg1 + v_arg2
                    break
                case 'SUB':
                    res = v_arg1 - v_arg2
                    break
                case 'MULT':
                    res = v_arg1 * v_arg2
                    break
                default:
                    res = 0
            }
            event.emit(i_cell, res)
        })
    })
}
Array(N).fill().map((v, i) => calcul(i))

console.log(res.join('\n'))