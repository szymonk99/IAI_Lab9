class Complex {
    private re: number;
    private im: number;

    constructor(re: number, im: number) {
        this.re = re;
        this.im = im;
    }

    add(com: Complex): Complex {
        let a = this.re + com.re;
        let b = this.im + com.im;
        return new Complex(a, b);
    }

    subtract(com: Complex):Complex {
        let a = this.re - com.re;
        let b = this.im - com.im;
        return new Complex(a, b);
    }

    getMod(): number {
        return Math.sqrt((Math.pow(this.re,2))+(Math.pow(this.im,2)));
    }

    toString() {
        console.log("re: ", this.re, ", ", "im: ", this.im);
    }

    addresult() {
        console.log("suma:",c);
    }

}

let a = new Complex(3, 4);
let b = new Complex(7, 4);
let c = a.add(b)

let d = new Complex(3, -2);

let e = c.subtract(d);

e.toString();
e.addresult();