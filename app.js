
    class Mostrar {
        constructor() {
            this.num1 = 0;
            this.num2 = 0;
            this.num3 = 0;
            this.res = "";
            this.sim_mayor = ">";
            this.sim_menor = "<"
            this.sim_igual = "="
            this.respuesta = ""
            this.contenedor = document.getElementById("main");
            
            this.record = JSON.parse(localStorage.getItem('record')) || 0;
            
        }

        mostrar_start() {
            
            this.contenedor.innerHTML = `<div class="row cont align-items-center justify-content-around"><button id="btnstart" type="button" class="btn tex_main col-10">START</button></div>`;
            let btnstart = document.getElementById("btnstart");
            btnstart.addEventListener("click", this.mostrar_juego.bind(this),this.numeros(),this.resultado());
            this.aciertos = 0
            this.header = document.getElementById("record")
            record.innerText=`record: ${this.record}` 
        }

        mostrar_juego() {
            
            this.contenedor.innerHTML = `<div class="row align-items-center justify-content-center cont">
                                        <div class="row justify-content-center">
                                        <span class="col-3 borde "><h3 id="num1" class="tex_main ">${this.num1} * ${this.num2}</h3></span>
                                        <span class="col-3 borde"><h3 class="tex_main ">?</h3></span>
                                        <span class="col-3 borde"><h3 id="num2" class="tex_main ">${this.num3}</h3></span>
                                        </div>
                                        <div><h2 class="tex_main">¿QUE SIMBOLO VA?</h2></div>
                                        <div class="row justify-content-center">
                                        <span class="col-3"><button id="btnmenor" type="button" class="btn tex_main  col-12"> &lt; </button></span>
                                        <span class="col-3"><button id="btnigual" type="button" class="btn tex_main col-12"> = </button></span>
                                        <span class="col-3"><button id="btnmayor" type="button" class="btn tex_main col-12"> &gt; </button></span>
                                        </div>
                                        </div>`;
            let btnmayor = document.getElementById("btnmayor");
            btnmayor.addEventListener("click", this.mayor.bind(this));
            
            let btnmenor = document.getElementById("btnmenor");
            btnmenor.addEventListener("click", this.menor.bind(this)); 
            let btnigual = document.getElementById("btnigual");
            btnigual.addEventListener("click", this.igual.bind(this)); 
        }
        mostrar_correcto(){
            this.aciertos += 1
            this.contenedor.innerHTML =`<div class="row align-items-center justify-content-center cont">
                                        <div class="col-12"><h3 class="tex_main correcto">CORRECTO</h3></div>
                                        <div class="col-12"><h3 class="tex_main">Llevas ${this.aciertos} aciertos</h3></div>
                                        <div class="col-10"><button id="btnsiguiente" type="button" class="btn tex_main  col-12">Siguiente</button></div>
                                        </div>`
            let btnmayor = document.getElementById("btnsiguiente");
            btnmayor.addEventListener("click", this.mostrar_juego.bind(this),this.numeros(),this.resultado());
            
        }

        mostrar_incorrecto(){
            
            this.contenedor.innerHTML =`<div class="row align-items-center justify-content-center cont">
                                        <div class="col-12"><h3 class="tex_main incorrecto">INCORRECTO</h3></div>
                                        <div class="col-12"><h3 class="tex_main">Hiciste ${this.aciertos} aciertos</h3></div>
                                        <div class="col-10"><button id="btnvolver" type="button" class="btn tex_main  col-12">Volver</button></div>
                                        </div>`
            let btnmayor = document.getElementById("btnvolver");
            btnmayor.addEventListener("click", this.mostrar_start.bind(this));
            
            this.record = this.aciertos > this.record ? this.aciertos : this.record
            localStorage.setItem(`record`, this.record)
            
        }

        numeros() {
            this.num1 = Math.floor(Math.random() * 10) + 1;
            this.num2 = Math.floor(Math.random() * 10) + 1;
            this.num3 = Math.floor(Math.random() * 100) + 1;
        }

        resultado() {
            let num4 = this.num1 * this.num2;
            this.res = num4 === this.num3 ? "=" : (this.res = num4 > this.num3 ? ">" : "<");
            return this.res;
        }

        mayor() {
            
            if(this.res===this.sim_mayor){
                this.respuesta = "correcto"
            }else{
                this.respuesta = "incorrecto"
            }
            if(this.respuesta ==="correcto"){
                this.mostrar_correcto() 
            }else{
                this.mostrar_incorrecto()
            }
            
            return this.respuesta
        }

        menor() {
            
            if(this.res===this.sim_menor){
                this.respuesta = "correcto"
            }else{
                this.respuesta = "incorrecto"
            }
            if(this.respuesta ==="correcto"){
                this.mostrar_correcto() 
            }else{
                this.mostrar_incorrecto()
            }
            console.log(this.respuesta)
            return this.respuesta
        }

        igual() {
            
            if(this.res===this.sim_igual){
                this.respuesta = "correcto"
            }else{
                this.respuesta = "incorrecto"
            }
            if(this.respuesta ==="correcto"){
                this.mostrar_correcto() 
            }else{
                this.mostrar_incorrecto()
            }
            console.log(this.respuesta)
            return this.respuesta
        }

        
}

    function start() {
        const mon = new Mostrar()
        mon.mostrar_start()
    
    }

    start()




