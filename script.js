function randint(int){
    return Math.floor(Math.random()*int);
}

function findFactors(int){
    let i = 1;
    let factors = [];
    while(i<=int){
        if(int%i == 0){
            factors.push([i, int/i]);
        }
        i+=1;
    }
    return factors;
}

function factoring(){
    document.getElementById("solutions").style.display = "none";
    document.getElementById("show").style.display = "block";
    let steps = "";
    let solutions = [];
    let num1 = randint(10)+1;
    let num3 = randint(50)+1;
    let factorsNum1 = findFactors(num1);
    let factorsNum3 = findFactors(num3);
    let index1 = randint(factorsNum1.length);
    let index2 = randint(factorsNum3.length);
    let factor1Num1 = factorsNum1[index1][0];
    let factor2Num1 = factorsNum1[index1][1];
    let factor1Num3 = factorsNum3[index2][0];
    let factor2Num3 = factorsNum3[index2][1];
    let num2 = (factor1Num1 * factor1Num3) + (factor2Num1 * factor2Num3);83
    document.getElementById("question").innerText = `${num1}x² + ${num2}x + ${num3} = 0`;
    steps+=`First, let's list out the factors of ${num1} and ${num3}.\n`;
    steps+=`Factors of ${num1}:`;
    for(let i = 0; i < factorsNum1.length; i++){
        steps+=`(${factorsNum1[i][0]},${factorsNum1[i][1]})`;
    }
    steps+=`\n`;
    steps+=`Factors of ${num3}:`;
    for(let i = 0; i < factorsNum3.length; i++){
        steps+=`(${factorsNum3[i][0]},${factorsNum3[i][1]})`;
    }
    steps+=`\n`;
    steps+=`We are looking for a pair of factors from each where multiplying two from each pair and adding them together will give us b.\n`;
    steps+=`In this case, that would be ${factor1Num1}, ${factor2Num1} and ${factor1Num3}, ${factor2Num3}.\n`;
    steps+=`This is because ${factor1Num1} * ${factor1Num3} = ${factor1Num1*factor1Num3}, and ${factor2Num1} * ${factor2Num3} = ${factor2Num1*factor2Num3}, and ${factor1Num1*factor1Num3} + ${factor2Num1*factor2Num3} = ${num2}.\n`;
    steps+=`This also means we can write the equation as: \n`;
    steps+=`${num1}x² + ${factor1Num1*factor1Num3}x + ${factor2Num1*factor2Num3}x + ${num3} = 0\n`;
    steps+=`Now, we can factor this out.\n`;

    let max = 0;
    let factorOut1 = 0;
    let factorOut2 = 0;
    let num1Fact = 0;
    let num3Fact = 0;
    let div1 = 0;
    let div3 = 0;
    if(num1 > factor1Num1*factor1Num3){
        max = factor1Num1*factor1Num3;
    }else{
        max = num1;
    }
    for(let i = 0; i <= max; i++){
        if(num1%i == 0 && (factor1Num1*factor1Num3)%i == 0){
            factorOut1 = i;
        }
    }

    num1Fact = (factor1Num1*factor1Num3)/factorOut1;

    if(factorOut1 == 1){
        if(num1 > factor2Num1*factor2Num3){
            max = factor2Num1*factor2Num3;
        }else{
            max = num1;
        }
        for(let i = 0; i <= max; i++){
            if(num1%i == 0 && (factor2Num1*factor2Num3)%i == 0){
                factorOut1 = i;
            }
        }
        num1Fact = (factor2Num1*factor2Num3)/factorOut1;
        div1 = factor2Num1*factor2Num3;

        if(num3 > factor1Num1*factor1Num3){
            max = factor1Num1*factor1Num3;
        }else{
            max = num3;
        }
        for(let i = 0; i <= max; i++){
            if(num3%i == 0 && (factor1Num1*factor1Num3)%i == 0){
                factorOut2 = i;
            }
        }
        num3Fact = (factor1Num1*factor1Num3)/factorOut2;
        div2 = factor1Num1*factor1Num3;
    }else{
        if(num3 > factor2Num1*factor2Num3){
            max = factor2Num1*factor2Num3;
        }else{
            max = num3;
        }
        for(let i = 0; i <= max; i++){
            if(num3%i == 0 && (factor2Num1*factor2Num3)%i == 0){
                factorOut2 = i;
            }
        }
        num3Fact = (factor2Num1*factor2Num3)/factorOut2;
        div1 = factor1Num1*factor1Num3;
        div2 = factor2Num1*factor2Num3;
    }

    steps+=`We can factor ${factorOut1}x out of (${num1}x² + ${div1}x), and we can factor ${factorOut2} out of (${div2}x + ${num3}).\n`;
    steps+=`This gives us\n`;
    num1/=factorOut1;
    num3/=factorOut2;
    steps+=`${factorOut1}x(${num1}x + ${num1Fact}) + ${factorOut2}(${num3Fact}x + ${num3}) = 0\n`;
    steps+=`We can now rewrite this as\n`;
    steps+=`(${factorOut1}x + ${factorOut2})(${num1}x + ${num3}) = 0\n`;
    steps+=`We'll set:\n`;
    steps+=`(${factorOut1}x + ${factorOut2}) = 0\n`;
    steps+=`(${num1}x + ${num3}) = 0\n`;
    if(factorOut2%factorOut1 == 0){
        if(num3%num1 == 0){
            solutions = [`${-(factorOut2/factorOut1)}`, `${-num3/num1}`];
        }else{
            solutions = [`${-(factorOut2/factorOut1)}`, `${-num3}/${num1}`];
        }
    }else{
        if(num3%num1 == 0){
            solutions = [`${-(factorOut2)}/${factorOut1}`, `${-num3/num1}`];
        }else{
            solutions = [`${-(factorOut2)}/${factorOut1}`, `${-num3}/${num1}`];
        }
    }
    document.getElementById("steps").innerText = steps;
    document.getElementById("solution").innerText = `Solutions: {${solutions[0]}, ${solutions[1]}}`;
}

function radicals(){
    document.getElementById("solutions").style.display = "none";
    document.getElementById("show").style.display = "block";
    let qDisplay = document.getElementById("question");
    let num1 = randint(10)+1;
    let num2 = randint(101);
    let sign = randint(2)+1;
    let isImaginary = false;
    let factorable = false;
    let coeff = 0;
    let steps = "";
    let solutions = [];
    if(sign==1){
        qDisplay.innerText = num1.toString() + "x²" + " + " + num2.toString();
        num2 *= -1;
        steps += `${num1}x² = ${num2} \n`;
    }else{
        qDisplay.innerText = num1.toString() + "x²" + " - " + num2.toString();
    }

    steps += "Step 1. Move c to the other side of the equation. \n";
    steps += `${num1}x² = ${num2} \n`;

    if(num2%num1 == 0){ 
        num2 = num2/num1;
        steps += "Step 2. Divide both sides by a. \n"
        steps += `x² = ${num2} \n`;
        steps += "Step 3. Square root both sides. \n"
        steps += `√x² = √${num2} \n`;
        steps += "Let's quickly put x in absolute value bars. This gives us: \n";
        steps += `|x| = √${num2} \n`;

        if(num2 < 0){
            num2*=-1;
            steps += `√${num2} is an imagininary number, so let's factor out i. \n`;
            steps += `x = i√${num2} \n`;
            isImaginary = true;
        }

        if(Number.isInteger(Math.sqrt(num2)) == true){
            steps += `Since ${num2} is a perfect square, we can obtain its square root easily.\n`
            num2 = Math.sqrt(num2);
            if(isImaginary == true){
                steps += `x = ±i${num2} \n`;
                solutions = [`${num2}i`, `-${num2}i`];
            }else{
                steps += `x = ±${num2} \n`;
                solutions = [`${num2}`, `-${num2}`];
            }
        }else{
            steps += `${num2} is not a perfect square, so let's simplify the radical.\n`;
            let i = Math.floor(Math.sqrt(num2));
            i*=i;
            while(i!=1){
                if(num2%i == 0 && Number.isInteger(Math.sqrt(i))){
                    steps += `Since ${i} is a perfect square, we can factor it out of √${num2}.\n`;
                    num2 /= i;
                    coeff += Math.sqrt(i);
                    if(isImaginary == true){
                        steps += `x = ±${coeff}i√${num2} \n`;
                    }else{
                        steps += `x = ±${coeff}√${num2} \n`;
                    }
                    factorable = true;
                }
                i-=1;
            }

            if(factorable == false){
                steps += `√${num2} contains no perfect squares, so it is already in its simplest form.\n`
                if(isImaginary == true){
                    solutions = [`i√${num2}`,`-i√${num2}`];
                }else{
                    solutions = [`√${num2}`,`-√${num2}`];
                }
            }else{
                if(isImaginary == true){
                    solutions = [`${coeff}i√${num2}`,`-${coeff}i√${num2}`];
                }else{
                    solutions = [`${coeff}√${num2}`,`-${coeff}√${num2}`];
                }
            }
        }

    }else{
        steps += `${num1} does not divide evenly into ${num2}, so let's turn this into an improper fraction.\n`;
        steps += `x² = ${num2}/${num1}\n`;
        steps += "Step 3. Square root both sides. \n"
        steps += `√x² = √${num2}/${num1} \n`;
        steps += "Let's quickly put x in absolute value bars. This gives us: \n";
        steps += `|x| = √${num2}/${num1} \n`;
        steps += `This is the same as saying:\n`;
        steps += `|x| = √${num2}/√${num1}\n`

        if(num2 < 0){
            num2*=-1;
            steps += `√${num2} is an imagininary number, so let's factor out i. \n`;
            steps += `x = i√${num2}/√${num1}\n`;
            isImaginary = true;
        }

        if(Number.isInteger(Math.sqrt(num1)) == true){
            steps+=`${num1} is a perfect square, so we can set its root as the denominator.\n`;
            num1 = Math.sqrt(num1);
            if(isImaginary == false){
                steps += `x = ±√${num2}/${num1}\n`;
            }else{
                steps += `x = ±i√${num2}/${num1}\n`;
            }
        }else{
            steps+=`${num1} is not a perfect square, so let's try to simplify it.\n`;
            let i = Math.floor(Math.sqrt(num1));
            i*=i;
            factorable = false;
            while(i!=1){
                if(num1%i == 0 && Number.isInteger(Math.sqrt(i))){
                    steps += `Since ${i} is a perfect square, we can factor it out of √${num1}.\n`;
                    num1 /= i;
                    coeff += Math.sqrt(i);
                    if(isImaginary == true){
                        steps += `x = ±i√${num2}/${coeff}√${num1} \n`;
                    }else{
                        steps += `x = ±√${num2}/${coeff}√${num1} \n`;
                    }
                    factorable = true;
                }
                i-=1;
            }
            if(factorable == false){
                steps += `√${num1} contains no perfect squares, so it is already in its simplest form.\n`;
            }

            steps += `We can't have radicals in the denominator, so we'll multiply both the numerator and denominator by √${num1} to rationalize the fraction.\n`;
            num2 *= num1;
            if(isImaginary == true){
                if(factorable == true){
                    num1 *= coeff;
                    steps += `x = i√${num2}/${num1}\n`;
                }else{
                    steps += `x = i√${num2}/${num1}\n`;
                }
            }else{
                if(factorable == true){
                    num1 *= coeff;
                    steps += `x = √${num2}/${num1}\n`;
                }else{
                    steps += `x = √${num2}/${num1}\n`;
                }
            }

            steps += `Next, let's check if √${num2} is simplifyable.\n`;
            if(Number.isInteger(Math.sqrt(num2)) == true){
                steps+=`${num2} is a perfect square, so we can set its root as the numerator.\n`;
                num2 = Math.sqrt(num2);
                if(isImaginary == false){
                    steps += `x = ±${num2}/${num1}\n`;
                }else{
                    steps += `x = ±i${num2}/${num1}\n`;
                }
            }else{
                steps+=`${num2} is not a perfect square, so let's try to simplify it.\n`;
                let i = Math.floor(Math.sqrt(num2));
                coeff = 0;
                factorable = false;
                i*=i;
                while(i!=1){
                    if(num2%i == 0 && Number.isInteger(Math.sqrt(i))){
                        steps += `Since ${i} is a perfect square, we can factor it out of √${num2}.\n`;
                        num2 /= i;
                        coeff += Math.sqrt(i);
                        if(isImaginary == true){
                            steps += `x = ±i${coeff}√${num2}/${num1} \n`;
                        }else{
                            steps += `x = ±${coeff}√${num2}/${num1} \n`;
                        }
                        factorable = true;
                    }
                    i-=1;
                }
            }
        }
        if(factorable == true){
            if(coeff%num1 == 0){
                steps += `We can simplify the fraction.\n`;
                coeff /= num1;
                num1 = 1;
                if(isImaginary == true){
                    steps += `x = ±i${coeff}√${num2}/1`;
                    solutions = [`i${coeff}√${num2}`, `-i${coeff}√${num2}`];
                }else{
                    steps += `x = ±${coeff}√${num2}/1`;
                    solutions = [`${coeff}√${num2}`, `-${coeff}√${num2}`];
                }
            }else if(num1%coeff == 0){
                steps += `We can simplify the fraction.\n`;
                coeff /= 1;
                num1/= coeff;
                if(isImaginary == true){
                    steps += `x = ±i√${num2}/${num1}`;
                    solutions = [`i√${num2}/${num1}}`, `-i√${num2}/${num1}`];
                }else{
                    steps += `x = ±√${num2}/${num1}`;
                    solutions = [`√${num2}/${num1}}`, `-√${num2}/${num1}`];
                }
            }else{
                solutions = [`i${coeff}√${num2}/${num1}`, `-i${coeff}√${num2}/${num1}`];
            }
        }else{
            steps += `${num2} is already in its most simple form.`;
            if(isImaginary == true){
                solutions = [`i√${num2}/${num1}`, `-i√${num2}/${num1}`];
            }else{
                solutions = [`√${num2}/${num1}`, `-√${num2}/${num1}`];
            }
        }
    }
    document.getElementById("steps").innerText = steps;
    document.getElementById("solution").innerText = `Solution: {${solutions[0]}, ${solutions[1]}}`;
}

function completingSquares(){
    document.getElementById("solutions").style.display = "none";
    document.getElementById("show").style.display = "block";
    let qDisplay = document.getElementById("question");
    let num1 = randint(10)+1;
    let num2 = num1*(randint(10)+1);
    let num3 = num1*(randint(10)+1);
    let sign1 = randint(2)+1;
    let sign2 = randint(2)+1;
    let isImaginary = false;
    let factorable = false;
    let bIsFraction = false;
    let cIsFraction = false;
    let coeff = 0;
    let steps = "";
    let solutions = [];
    if(sign1==1){
        if(sign2==1){
            qDisplay.innerText = `${num1}x² + ${num2}x + ${num3}`;
            num3*=-1;
        }else{
            qDisplay.innerText = `${num1}x² + ${num2}x - ${num3}`;
        }
        steps+=`Let's move c to the other side of the equation.\n`;
        steps+=`${num1}x² + ${num2}x = ${num3}\n`;
    }else{
        num2*=-1;
        if(sign2==1){
            qDisplay.innerText = `${num1}x² ${num2}x + ${num3}`;
            num3*=-1;
        }else{
            qDisplay.innerText = `${num1}x² ${num2}x - ${num3}`;
        }
        steps+=`Let's move c to the other side of the equation.\n`;
        steps+=`${num1}x² ${num2}x = ${num3}\n`;
    }
    if(num1 > 1){
        steps+=`We need to make a = 1, so we'll divide both sides by ${num1}.\n`;
        num2/=num1;
        if(num2 > 0){
            steps += `x² + ${num2}x = ${num3/num1}\n`;
        }else{
            steps += `x² ${num2}x = ${num3/num1}\n`; 
        }
    }

    steps+=`Next, we obtain b, b/2, and (b/2)².\n`;
    steps+=`b is ${num2}.\n`;
    if(num2%2 == 0){
        num2/=2;
        steps+= `Since b is even, we can easily obtain b/2: ${num2}\n`;
        steps+= `(b/2)² is ${num2*num2}. Now that we have all three, we can rewrite the equation as \n`;
        if(num2 > 0){
            steps+= `x² + ${num2}x + ${num2*num2} = ${num3/num1} + ${num2*num2}\n`;
            steps+=`The left side of our equation can actually be written as (x-b/2)², so let's do that now.\n`;
            steps+=`(x + ${num2})² = ${num3/num1} + ${num2*num2}\n`;
        }else{
            steps+= `x² ${num2}x + ${num2*num2} = ${num3/num1} + ${num2*num2}\n`;
            steps+=`The left side of our equation can actually be written as (x-b/2)², so let's do that now.\n`;
            steps+=`(x ${num2})² = ${num3/num1} + ${num2*num2}\n`;
        }
    }else{
        bIsFraction = true;
        steps+=`Since b is not even, we will write b/2 as a mixed number: ${num2}/2.\n`;
        steps+=`Let's obtain (b/2)² by squaring both terms: ${num2*num2}/4.\n`;
        steps+=`Now that we have all three, we can rewrite the equation as \n`;
        if(num2 > 0){
            steps+= `x² + ${num2}x + ${num2*num2}/4 = ${num3/num1} + ${num2*num2}/4\n`;
            steps+=`The left side of our equation can actually be written as (x-b/2)², so let's do that now.\n`;
            steps+=`(x + ${num2}/2)² = ${num3/num1} + ${num2*num2}/4\n`;
        }else{
            steps+= `x² ${num2}x + ${num2*num2}/4 = ${num3/num1} + ${num2*num2}/4\n`;
            steps+=`The left side of our equation can actually be written as (x-b/2)², so let's do that now.\n`;
            steps+=`(x ${num2}/2)² = ${num3/num1} + ${num2*num2}/4\n`;
        }
    }
    steps+=`Now, we'll simplify the left side of our equation.\n`;
    
    if(bIsFraction == true){
        steps+=`${num3/num1} is a whole number, but ${num2*num2}/4 isn't, so we'll multiply ${num3/num1} by 4/4.\n`;
        num3/=num1;
        steps+=`This gives us ${num3*4}/4 + ${num2*num2}/4, which is ${num2*num2 + num3*4}/4\n`;
        if((num3*4 + (num2*num2))%4 == 0){
            steps+=`Which is actually divisible by 4, so we can rewrite the equation as:\n`;
            num3 = (num3 + (num2*num2))/4;
            if(num2 > 0){
                steps+=`(x + ${num2}/2)² = ${num3}\n`;
                steps+=`Let's now square root both sides.\n`;
                steps+=`|x + ${num2}/2| = √${num3}\n`;
            }else{
                steps+=`(x  ${num2}/2)² = ${num3}\n`;
                steps+=`Let's now square root both sides.\n`;
                steps+=`|x ${num2}/2| = √${num3}\n`;
            }
        }else{
            cIsFraction = true;
            num3 = num3*4 + num2*num2;
            steps+=`So we can now rewrite the equation as:\n`;
            if(num2 > 0){
                steps+=`(x + ${num2}/2)² = ${num3}/√4\n`;
                steps+=`Let's now square root both sides.\n`;
                steps+=`|x + ${num2}/2| = √${num3}/√4\n`;
            }else{
                steps+=`(x  ${num2}/2)² = ${num3}/√4\n`;
                steps+=`Let's now square root both sides.\n`;
                steps+=`|x ${num2}/2| = √${num3}/√4\n`;
            }
        }
    }else{
        steps+=`Both ${num3/num1} and ${num2*num2} are whole numbers, so we can just add them.\n`;
        steps+=`The equation can now be rewritten as:\n`;
        num3 = num3/num1 + num2*num2;
        if(num2 > 0){
            steps+=`(x + ${num2})² = ${num3}\n`;
            steps+=`Let's square root both sides.\n`;
            steps+=`|x + ${num2}| = √${num3}\n`;
        }else{
            steps+=`(x ${num2})² = ${num3}\n`;
            steps+=`Let's square root both sides.\n`;
            steps+=`|x ${num2}| = √${num3}\n`;
        }
    }

    steps+=`Now, we'll work on simplifying the radical.\n`;

    if(cIsFraction == true){
        if(num3<0){
            steps+=`√${num3}/4 is an imaginary number, so we'll take out the imaginary part.\n`;
            num3*=-1;
            if(num2>0){
                if(bIsFraction == true){
                    steps+=`x + ${num2}/2 = ±i√${num3}/√4\n`;
                }else{
                    steps+=`x + ${num2} = ±i√${num3}/√4\n`;
                }
            }else{
                if(bIsFraction == true){
                    steps+=`x ${num2}/2 = ±i√${num3}/√4\n`;
                }else{
                    steps+=`x ${num2} = ±i√${num3}/√4\n`;
                }
            }
            isImaginary = true;
        }
        
        steps+=`We have to simplify the denominator. Since 4 is a perfect square, we can rewrite the equation as\n`;

        if(isImaginary == true){
            if(num2>0){
                if(bIsFraction == true){
                    steps+=`x + ${num2}/2 = ±i√${num3}/2\n`;
                }else{
                    steps+=`x + ${num2} = ±i√${num3}/2\n`;
                }
            }else{
                if(bIsFraction == true){
                    steps+=`x ${num2}/2 = ±√${num3}/2\n`;
                }else{
                    steps+=`x ${num2} = ±√${num3}/2\n`;
                }
            }
        }else{
            if(num2>0){
                if(bIsFraction == true){
                    steps+=`x + ${num2}/2 = ±√${num3}/2\n`;
                }else{
                    steps+=`x + ${num2} = ±√${num3}/2\n`;
                }
            }else{
                if(bIsFraction == true){
                    steps+=`x ${num2}/2 = ±√${num3}/2\n`;
                }else{
                    steps+=`x ${num2} = ±√${num3}/2\n`;
                }
            }
        }

        if(Number.isInteger(Math.sqrt(num3))){
            steps+=`${num3} is a perfect square, so we can easily rewrite the equation as\n`;
            num3 = Math.sqrt(num3);
            if(num2>0){
                if(isImaginary == true){
                    steps+=`x + ${num2}/2 = ${num3}i/2\n`;
                    num2*=-1;
                    steps+=`Finally, let's isolate x.\n`;
                    steps+=`x = ${num2}/2 ± ${num3}i/2`;
                    solutions = [`(${num2} + ${num3}i)/2`,`(${num2} - ${num3}i)/2`];
                }else{
                    steps+=`x + ${num2}/2 = ${num3}/2\n`;
                    num2*=-1;
                    steps+=`Finally, let's isolate x.\n`;
                    steps+=`x = ${num2}/2 ± ${num3}/2`;
                    if((num2+num3)%2 == 0){
                        if((num2-num3)%2 == 0){
                            solutions = [`${(num2+num3)/2}`,`${(num2-num3)/2}`];
                        }else{
                            solutions = [`${(num2+num3)/2}`,`${(num2-num3)}/2`];
                        }
                    }else{
                        if((num2-num3)%2 == 0){
                            solutions = [`${(num2+num3)}/2`,`${(num2-num3)/2}`];
                        }else{
                            solutions = [`${(num2+num3)}/2`,`${(num2-num3)}/2`];
                        }
                    }
                }   
            }else{
                if(isImaginary == true){
                    steps+=`x ${num2}/2 = ${num3}i/2\n`;
                    num2*=-1;
                    steps+=`Finally, let's isolate x.\n`;
                    steps+=`x = ${num2}/2 ± ${num3}i/2`;
                    solutions = [`(${num2} + ${num3}i)/2`,`(${num2} - ${num3}i)/2`];
                }else{
                    steps+=`x ${num2}/2 = ${num3}/2\n`;
                    num2*=-1;
                    steps+=`Finally, let's isolate x.\n`;
                    steps+=`x = ${num2} ± ${num3}`;
                    if((num2+num3)%2 == 0){
                        if((num2-num3)%2 == 0){
                            solutions = [`${(num2+num3)/2}`,`${(num2-num3)/2}`];
                        }else{
                            solutions = [`${(num2+num3)/2}`,`${(num2-num3)}/2`];
                        }
                    }else{
                        if((num2-num3)%2 == 0){
                            solutions = [`${(num2+num3)}/2`,`${(num2-num3)/2}`];
                        }else{
                            solutions = [`${(num2+num3)}/2`,`${(num2-num3)}/2`];
                        }
                    }
                }   
            }
        }else{
            let i = Math.floor(Math.sqrt(num3));
            i*=i;
            while(i!=1){
                if(num3%i == 0 && Number.isInteger(Math.sqrt(i))){
                    steps += `Since ${i} is a perfect square, we can factor it out of √${num3}.\n`;
                    num3 /= i;
                    coeff += Math.sqrt(i);
                    if(isImaginary == true){
                        if(num2>0){
                            steps += `x + ${num2}/2 = ±${coeff}i√${num3}/2 \n`;
                        }else{
                            steps += `x ${num2}/2 = ±${coeff}i√${num3}/2 \n`;
                        }
                    }else{
                        if(num2>0){
                            steps += `x + ${num2}/2 = ±${coeff}√${num3}/2 \n`;
                        }else{
                            steps += `x ${num2}/2 = ±${coeff}√${num3}/2 \n`;
                        }
                    }
                    factorable = true;
                }
                i-=1;
            }

            if(factorable == false){
                steps += `√${num3} is already in its most simple form.\n`;
                
                if(isImaginary == true){
                    if(num2 > 0){
                        steps+=`x + ${num2}/2 = i√${num3}/2\n`;
                    }else{
                        steps+=`x ${num2}/2 = i√${num3}/2\n`;
                    }
                    num2*=-1;
                    steps+=`Finally, let's isolate x.\n`;
                    steps+=`x = ${num2}/2 ± i√${num3}/2`;
                    solutions = [`(${num2} + i√${num3})/2`,`(${num2} - i√${num3})/2`];
                }else{
                    if(num2 > 0){
                        steps+=`x + ${num2}/2 = √${num3}/2\n`;
                    }else{
                        steps+=`x ${num2}/2 = √${num3}/2\n`;
                    }
                    num2*=-1;
                    steps+=`Finally, let's isolate x.\n`;
                    steps+=`x = ${num2}/2 ± √${num3}/2`;
                    solutions = [`(${num2} + √${num3})/2`,`(${num2} - √${num3})/2`];
                }
            }else{
                if(isImaginary == true){
                    if(num2 > 0){
                        steps+=`x + ${num2}/2 = ${coeff}i√${num3}/2\n`;
                    }else{
                        steps+=`x ${num2}/2 = ${coeff}i√${num3}/2\n`;
                    }
                    num2*=-1;
                    steps+=`Finally, let's isolate x.\n`;
                    steps+=`x = ${num2}/2 ± ${coeff}i√${num3}/2`;
                    solutions = [`(${num2} + ${coeff}i√${num3})/2`,`(${num2} - ${coeff}i√${num3})/2`];
                }else{
                    if(num2 > 0){
                        steps+=`x + ${num2}/2 = ${coeff}√${num3}/2\n`;
                    }else{
                        steps+=`x ${num2}/2 = ${coeff}√${num3}/2\n`;
                    }
                    num2*=-1;
                    steps+=`Finally, let's isolate x.\n`;
                    steps+=`x = ${num2}/2 ± ${coeff}√${num3}/2`;
                    solutions = [`(${num2} + ${coeff}√${num3})/2`,`(${num2} - ${coeff}√${num3})/2`];
                }
            }
        }

    }else{
        if(num3<0){
            steps+=`√${num3} is an imaginary number, so we'll take out the imaginary part.\n`;
            num3*=-1;
            if(num2>0){
                steps+=`x + ${num2} = ±i√${num3}\n`;
            }else{
                steps+=`x ${num2} = ±i√${num3}\n`;
            }
            isImaginary = true;
        }
        if(Number.isInteger(Math.sqrt(num3))){
            steps+=`${num3} is a perfect square, so we can easily rewrite the equation as\n`;
            num3 = Math.sqrt(num3);
            if(num2>0){
                if(isImaginary == true){
                    steps+=`x + ${num2} = ${num3}i\n`;
                    num2*=-1;
                    steps+=`Finally, let's isolate x.\n`;
                    steps+=`x = ${num2} ± ${num3}i`;
                    solutions = [`${num2} + ${num3}i`,`${num2} - ${num3}i`];
                }else{
                    steps+=`x + ${num2} = ${num3}\n`;
                    num2*=-1;
                    steps+=`Finally, let's isolate x.\n`;
                    steps+=`x = ${num2} ± ${num3}`;
                    solutions = [`${num2+num3}`,`${num2-num3}`];
                }   
            }else{
                if(isImaginary == true){
                    steps+=`x ${num2} = ${num3}i\n`;
                    num2*=-1;
                    steps+=`Finally, let's isolate x.\n`;
                    steps+=`x = ${num2} ± ${num3}i`;
                    solutions = [`${num2} + ${num3}i`,`${num2} - ${num3}i`];
                }else{
                    steps+=`x ${num2} = ${num3}\n`;
                    num2*=-1;
                    steps+=`Finally, let's isolate x.\n`;
                    steps+=`x = ${num2} ± ${num3}`;
                    solutions = [`${num2+num3}`,`${num2-num3}`];
                }   
            }
        }else{
            let i = Math.floor(Math.sqrt(num3));
            i*=i;
            while(i!=1){
                if(num3%i == 0 && Number.isInteger(Math.sqrt(i))){
                    steps += `Since ${i} is a perfect square, we can factor it out of √${num3}.\n`;
                    num3 /= i;
                    coeff += Math.sqrt(i);
                    if(isImaginary == true){
                        if(num2>0){
                            steps += `x + ${num2} = ±${coeff}i√${num3} \n`;
                        }else{
                            steps += `x ${num2} = ±${coeff}i√${num3} \n`;
                        }
                    }else{
                        if(num2>0){
                            steps += `x + ${num2} = ±${coeff}√${num3} \n`;
                        }else{
                            steps += `x ${num2} = ±${coeff}√${num3} \n`;
                        }
                    }
                    factorable = true;
                }
                i-=1;
            }
    
            if(factorable == false){
                steps += `√${num3} contains no perfect squares, so it is already in its simplest form.\n`  
                steps+= `Finally, we'll isolate x.\n`;
                num2*=-1;
                steps += `x = ${num2} ± √${num3}`;
                solutions = [`${num2} + √${num3}`, `${num2} - √${num3}`];
            }else{
                steps+= `Finally, we'll isolate x.\n`;
                num2*=-1;
                steps += `x = ${num2} ± ${coeff}√${num3}`;
                solutions = [`${num2} + ${coeff}√${num3}`, `${num2} - ${coeff}√${num3}`];
            }    
        }
    }
    document.getElementById("steps").innerText = steps;
    document.getElementById("solution").innerText = `Solutions: {${solutions[0]}, ${solutions[1]}}`;
}

function show(){
    document.getElementById("solutions").style.display = "block";
    document.getElementById("show").style.display = "none";
}