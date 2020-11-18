function solution(S) {

    if (S.length > 2000) {
        return 'Error: Command String Too Long!';
    }

    let commandArray = S.split(' ');
    let stack = [];
    let error = false;

    commandArray.forEach((element) => {

        if (!isNaN(parseInt(element))) {
            stack.push(element);
        }

        if (element === 'DUP') {
            stack.push(stack[stack.length - 1]);
        }

        if (element === 'POP') {
            stack.pop();
        }

        if (element === '+') {
            let lastTwo = stack.slice(-2);

            if (lastTwo.length === 2) {
                stack.pop();
                stack.pop();
                stack.push(parseInt(lastTwo[0]) + parseInt(lastTwo[1]));
            } else {
                error = true;
            }
        }

        if (element === '-') {
            let lastTwo = stack.slice(-2);

            if (lastTwo.length === 2) {
                stack.pop();
                stack.pop();

                let diff = parseInt(lastTwo[1]) - parseInt(lastTwo[0]);

                if (diff < 0) {
                    error = true;
                } else {
                    stack.push(diff);
                }
            } else {
                error = true;
            }

        }

    });

    if (error) {
        return -1;
    } else {
        return stack[stack.length - 1];
    }
}

solution('13 DUP 4 POP 5 DUP + DUP + -');
// solution('5 6 + -');