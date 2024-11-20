
function x5(){
    for (let I = 0; I <= 4; ++I)
       for (let J= 0;J <= 4; ++J)
          for (let K= 0; K <= 4;++K)
        break
}
function y5() {
    for (let L = 0; L <= -4 && L <= 4; ++L || L--)
        for (let M = 0; M <= -4 && M <= 4; ++M || M--)
            for (let N = 0; N <= -4 && N <= 4; ++N || N--)
        continue
}

function z5(){
    for (let O= 0; O >= 4; --O)
       for (let P = 0; P >= 4; --P)
          for (let Q = 0; Q >= 4; --Q)
        break
}
function T5(){
    do `x5*y5`
    while (z5)
    do `y5*z5`
    while (x5)
    do `x5*z5`
    while (y5)
}
//function t5(){
//    do `x5*y5` while ({ z5: `0,z>=5,z--`})
//    do `x5*z5` while ({ y5: `0,z>=5,y--`})
//    do `y5*z5` while ({ x5: `0,x>=5,x--`}}}

