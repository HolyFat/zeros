module.exports = function zeros(expression) {
    let valueExcl;
    let valueNum;
    let sum2 = 1;
    let result = 0;
    let check;
    let i;
    let sum;
    let x;

    sum2 = BigInt(sum2);
    expression = expression.split('*');
    for(i = 0; i < expression.length;i++){
        sum = 1;
        sum = BigInt(sum);

        valueExcl = (expression[i].match(/!/g) || []);
        valueNum = Number(expression[i].match(/\d+/g));

        if(valueExcl.length === 1){

            valueNum = BigInt(valueNum);
            while (valueNum>0){

                sum = sum * valueNum;
                valueNum = valueNum-1n;
            }

        }

        else if(valueExcl.length===2){

            valueNum = BigInt(valueNum);

            while (valueNum > 0){
                sum *=valueNum;
                valueNum = valueNum-2n;
            }

        }
        expression[i] = BigInt(sum);

    }

    for(x = 0; x < expression.length; x++){
        expression[x] = BigInt(expression[x]);
        sum2 *= expression[x];
    }



    check = String(sum2).slice(-1) ;

    while (check === '0'){
        sum2=sum2/10n;
        check = String(sum2).slice(-1) ;
        result++;

    }

    return result;

}
