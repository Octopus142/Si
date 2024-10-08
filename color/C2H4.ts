class C2H4 {
    readonly carbonCount: number;
    readonly hydrogenCount: number;
}
class C6H8 implements C2H4 {
    readonly carbonCount: number = 6;
    readonly hydrogenCount: number = 8;
}
class C14H12 implements C2H4 {
    readonly carbonCount: number = 14;
    readonly hydrogenCount: number = 12;
}
void function *generateC2H4(){
    yield new C2H4()
    yield new C6H8()
    yield new C14H12()
}
