const botaoInscrever = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const botaoCancelar = document.querySelector('.cancelar');
const botaoConfirmar = document.querySelector('.confirmar');

botaoInscrever.addEventListener('click', inscrever);

botaoCancelar.addEventListener('click', function () {
    modal.classList.add('escondido');
});

botaoConfirmar.addEventListener('click', function () {
    botaoInscrever.addEventListener('click', inscrever);
    botaoInscrever.classList.remove('inscrito');
    botaoInscrever.textContent = 'INSCREVER-SE';
    modal.classList.add('escondido');
});

function inscrever(event) {
    const botaoClicado = event.target;

    botaoClicado.textContent = 'INSCRITO';
    botaoClicado.classList.add('inscrito');

    botaoClicado.removeEventListener('click', inscrever);
    botaoClicado.addEventListener('click', function () {
        if (botaoClicado.textContent !== 'INSCREVER-SE') {
            modal.classList.remove('escondido');
        }
    });
}