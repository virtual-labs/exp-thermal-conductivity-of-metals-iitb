function verify_values(value:number, truevalue:number):boolean {
    if((truevalue == 0) && (value == truevalue)) {
        return true
    }


    let calculated_value = Math.abs((truevalue - value)/truevalue*100);

    if(calculated_value <= 4) {
        return true
    } else {
        return false;
    }
}

function random(min: number, max: number): number {
    let num = (max - min)*Math.random()+min;
    return num;
}

function std_deviation(num: number) {
    let std  = num/100.0;

    let dev = num - random(-std, std);

    return dev;
}

function regression_linear(x:number[],y:number[]):number[]{
    let sumx=0;
    let sumy=0;
    let sumxy=0;
    let sumxx=0;
    let n=x.length;
    for(let i=0;i<n;i++){
        sumx+=x[i];
        sumy+=y[i];
        sumxy+=x[i]*y[i];
        sumxx+=x[i]*x[i];
    }
    let pol=[];
    pol[0]=(sumx*sumy-n*sumxy)/(sumx**2-n*sumxx);
    pol[1]=(sumy-pol[0]*sumx)/n;
    return(pol);
}