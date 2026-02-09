function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        clearDisplay(){
            this.display.value = ''
        },

        apaga1(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta Invalida');
                    return
                }

                this.display.value = String(conta);
            }catch(e){
                alert('Conta Invalida')
                return;
            }
        },

        
        inicia() {
            this.cliqueBotoes()
        },

        cliqueBotoes() {
            document.addEventListener('click', function (e) {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                if(el.classList.contains('btn-apagar')){
                    this.apaga1()
                }
                if(el.classList.contains('btn-somar')){
                    this.realizaConta()
                }
            }.bind(this));
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia()