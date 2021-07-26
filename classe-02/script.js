const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('change', function (event) {
        const inputModificado = event.target;
        if (inputModificado.id === 'quiz-1') {
            if (inputModificado.value == '4') {
                inputModificado.classList.add('acertou')
                inputModificado.classList.remove('errou');
            } else if (inputModificado.value == '') {
                inputModificado.classList.remove('acertou', 'errou');
            } else {
                inputModificado.classList.add('errou');
                inputModificado.classList.remove('acertou');
            }
        } else if (inputModificado.id === 'quiz-2') {
            if (inputModificado.value === '4') {
                inputModificado.classList.add('acertou')
                inputModificado.classList.remove('errou');
            } else if (inputModificado.value == '') {
                inputModificado.classList.remove('acertou', 'errou');
            } else {
                inputModificado.classList.add('errou');
                inputModificado.classList.remove('acertou');
            }
        } else if (inputModificado.id === 'quiz-3') {
            if (inputModificado.value === '9') {
                inputModificado.classList.add('acertou')
                inputModificado.classList.remove('errou');
            } else if (inputModificado.value == '') {
                inputModificado.classList.remove('acertou', 'errou');
            } else {
                inputModificado.classList.add('errou');
                inputModificado.classList.remove('acertou');
            }
        } else if (inputModificado.id === 'quiz-4') {
            if (inputModificado.value === '2') {
                inputModificado.classList.add('acertou')
                inputModificado.classList.remove('errou');
            } else if (inputModificado.value == '') {
                inputModificado.classList.remove('acertou', 'errou');
            } else {
                inputModificado.classList.add('errou');
                inputModificado.classList.remove('acertou');
            }
        } else if (inputModificado.id === 'quiz-5') {
            if (inputModificado.value === '18') {
                inputModificado.classList.add('acertou')
                inputModificado.classList.remove('errou');
            } else if (inputModificado.value == '') {
                inputModificado.classList.remove('acertou', 'errou');
            } else {
                inputModificado.classList.add('errou');
                inputModificado.classList.remove('acertou');
            }
        } else if (inputModificado.id === 'quiz-6') {
            if (inputModificado.value === '12') {
                inputModificado.classList.add('acertou')
                inputModificado.classList.remove('errou');
            } else if (inputModificado.value == '') {
                inputModificado.classList.remove('acertou', 'errou');
            } else {
                inputModificado.classList.add('errou');
                inputModificado.classList.remove('acertou');
            }
        } else if (inputModificado.id === 'quiz-7') {
            if (inputModificado.value === '121') {
                inputModificado.classList.add('acertou')
                inputModificado.classList.remove('errou');
            } else if (inputModificado.value == '') {
                inputModificado.classList.remove('acertou', 'errou');
            } else {
                inputModificado.classList.add('errou');
                inputModificado.classList.remove('acertou');
            }
        } else if (inputModificado.id === 'quiz-8') {
            if (inputModificado.value === '20') {
                inputModificado.classList.add('acertou')
                inputModificado.classList.remove('errou');
            } else if (inputModificado.value == '') {
                inputModificado.classList.remove('acertou', 'errou');
            } else {
                inputModificado.classList.add('errou');
                inputModificado.classList.remove('acertou');
            }
        } else if (inputModificado.id === 'quiz-9') {
            if (inputModificado.value === '27') {
                inputModificado.classList.add('acertou')
                inputModificado.classList.remove('errou');
            } else if (inputModificado.value == '') {
                inputModificado.classList.remove('acertou', 'errou');
            } else {
                inputModificado.classList.add('errou');
                inputModificado.classList.remove('acertou');
            }
        } else if (inputModificado.id === 'quiz-10') {
            if (inputModificado.value === '16') {
                inputModificado.classList.add('acertou')
                inputModificado.classList.remove('errou');
            } else if (inputModificado.value == '') {
                inputModificado.classList.remove('acertou', 'errou');
            } else {
                inputModificado.classList.add('errou');
                inputModificado.classList.remove('acertou');
            }
        }
    })
})