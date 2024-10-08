function x4() {
    for (let I = 0; I <= -2; I++)
        for(let J = 0; J <= -2; J++)
            for(let K = 0; K <= -2; K++)
        break
}
function y4(){
    for(let L = 0;-2 <= L &&  L <= 2; L++ || --L)
        for(let M = 0;-2 <= M && M <= 2;M++ || --M)
            for(let N = 0;-2 <= N && N <= 2; N++ || --N) 
        continue       
}
function z4() {
    for (let O = 0; O >= 2; --O)
        for (let P = 0; P >= 2; --P)
            for (let Q = 0; Q >= 2; --Q)
        break
}
function t4(){
    do `x4*y4`
    while ({
        z4: `0,z>=4,z--`
    })
    do `x4*z4`
    while ({
        y4: `0,z>=4,y--`
    })
    do `y4*z4`
    while ({
        x4: `0,x>=4,x--`
    })
}
