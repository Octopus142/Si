interface CH4 {
    carbonCount: number;
    hydrogenCount: number;
}
class C1H4 implements CH4 {
    readonly carbonCount: number = 1;
    readonly hydrogenCount: number = 4;
}
class C2H6 implements CH4 {
    readonly carbonCount: number = 2;
    readonly hydrogenCount: number = 6;
}
class C3H8 implements CH4 {
    readonly carbonCount: number = 3;
    readonly hydrogenCount: number = 8;
}
void function *generateC1H4(){
    yield new C1H4()
    yield new C2H6()
    yield new C3H8()
}
