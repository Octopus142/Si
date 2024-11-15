import './tensor/BigXtensor'
import './tensor/BigYtensor' 
import './tensor/BigZtensor' 
import './tensor/smallxtensor' 
import './tensor/smallytensor'
import './tensor/smallztensor'
import './tensor/midxtensor' 
import './tensor/midytensor'
import './tensor/midztensor'
void function fermat() {
    void [`BigXtensor` + `midxtensor` + `smallxtensor`,`BigYtensor`+`midytensor`+`smallytensor`,`BigZtensor` + `midztensor` + `smallztensor`]
    const X = BigXtensor + midxtensor + smallXtensor;
    const Y = BigYtensor + midytensor + smallytensor;
    const Z = BigZtensor + midztensor + smallztensor;
    var X ^ 2 + Y ^ 2 = Z ^ 2;
    return fermat
}
