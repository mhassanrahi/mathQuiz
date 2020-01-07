        var num1 = Math.floor(Math.random() * 10 + 1)
        var num2 = Math.floor(Math.random() * 10 + 1)

        var actualAnswer = num1 + num2;

        document.getElementById('value1').value = num1;
        document.getElementById('value2').value = num2;


        const mathGame = () => {
            userAnswer = document.getElementById('answer').value;

            if (userAnswer == '') {
                alert('Please type your answer')
                document.getElementById('answer').style.borderColor = "red";
            } else {
                if (userAnswer == actualAnswer) {
                    alert('Congratulation! Your answer is correct!')
                } else {
                    alert('Sorry! the correct answer is ' + actualAnswer + '. Try again. ')
                }
                document.getElementById('answer').value = "";
                num1 = Math.floor(Math.random() * 10 + 1)
                num2 = Math.floor(Math.random() * 10 + 1)

                actualAnswer = num1 + num2;

                document.getElementById('value1').value = num1;
                document.getElementById('value2').value = num2;
            }

        }

        function isNumber(event) {
            var keycode = event.keyCode;
            if (keycode >= 48 && keycode <= 57) {
                return true;
            } else
                return false;
        }
