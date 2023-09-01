
    class Mostrar {
        constructor() {
            this.sim_menor = "<"
            this.sim_igual = "="
            this.sim_mayor = ">"
            this.contenedor = document.getElementById("main");
            this.nombre = JSON.parse(localStorage.getItem('nombre')) || ""
            this.record_sin_tiempo = JSON.parse(localStorage.getItem('record_sin_tiempo')) || 0
            this.record_con_tiempo = JSON.parse(localStorage.getItem('record_con_tiempo')) || 0
            this.cuenta= [this.nombre,this.record_con_tiempo,this.record_sin_tiempo]
            
        }
        mostrar_header(){
            this.header_nombre = document.getElementById("nombre")
            this.header_nombre.innerText=`NOMBRE: ${this.cuenta[0]}`
            this.header_nombre = document.getElementById("record_sin_tiempo")
            this.header_nombre.innerText=`RECORD: ${this.cuenta[2]}`
            this.header_nombre = document.getElementById("record_con_tiempo")
            this.header_nombre.innerText=`RECORD CON TIEMPO: ${this.cuenta[1]}`
        }
        mostrar_start() {
            localStorage.setItem('nombre', JSON.stringify(this.cuenta[0]));
            this.mostrar_header()
            this.contenedor.innerHTML = `<div class="row cont  align-items-center justify-content-around">
                                        <button id="btnstart" type="button" class="btn tex_main col-sm-10 col-12">START</button>
                                        <button id="btn_nombre" type="button" class="btn tex_main col-sm-10 col-12">Cambiar Nombre</button>
                                        </div>`
                                        
            let btnstart = document.getElementById("btnstart");
            btnstart.addEventListener("click", this.mostrar_modo.bind(this),this.numeros(),this.resultado());
            let btncrear = document.getElementById("btn_nombre")
            btncrear.addEventListener("click", this.mostrar_cambiar_nombre.bind(this));
            this.aciertos = 0
            
            
            
            
        }
        
        mostrar_cambiar_nombre(){
            this.contenedor.innerHTML =`<div class="col-12 row cont align-items-center justify-content-around">
            <h3 class="tex_main col-sm-5 col-12">Ingrese su nombre:</h3>
            <span class="con_input col-sm-5 col-12"><input id="input_nombre" class="input tex_main" type="text"></span>
            <button id="btnlisto" type="button" class="btn tex_main col-sm-5 col-12">LISTO</button>
            </div>`
            let btnlisto = document.getElementById("btnlisto");
            let input_nombre = document.getElementById("input_nombre")
            btnlisto.addEventListener("click", ()=>{
                this.cuenta[0] = input_nombre.value
                
            })
            btnlisto.addEventListener("click", this.mostrar_start.bind(this))
            
        }



        mostrar_modo(){
            this.contenedor.innerHTML = `<div class="row cont  align-items-center justify-content-around">
                                        <h3 class="col-7 tex_main">MODO</h3>
                                        <button id="btn_sin_tiempo" type="button" class="btn tex_main col-sm-7 col-12">SIN TIEMPO</button>
                                        <button id="btn_con_tiempo" type="button" class="btn tex_main col-sm-7 col-12">CON TIEMPO</button>`
            let btn_facil = document.getElementById("btn_sin_tiempo");
            btn_facil.addEventListener("click", this.mostrar_juego_sin_tiempo.bind(this))
            let btn_normal = document.getElementById("btn_con_tiempo");
            btn_normal.addEventListener("click", this.mostrar_juego_con_tiempo.bind(this))
            
            
                                    }
                                    
        mostrar_juego_sin_tiempo() {
            
            this.contenedor.innerHTML = `<div class="row align-items-center justify-content-center cont">
                                        <div class="row justify-content-center col-12">
                                        <span class="col-sm-3 col-4 borde "><h3 id="num1" class="tex_main num ">${this.num1} * ${this.num2}</h3></span>
                                        <span class="col-3 borde"><h3 class="tex_main ">?</h3></span>
                                        <span class="col-sm-3 col-3 borde"><h3 id="num2" class="tex_main num">${this.num3}</h3></span>
                                        </div>
                                        <div><h2 class="tex_main">¿QUE SIMBOLO VA?</h2></div>
                                        <div class="row justify-content-center">
                                        <span class="col-sm-3 col-4"><button id="btnmenor" type="button" class="btn tex_main  col-12"> &lt; </button></span>
                                        <span class="col-sm-3 col-4"><button id="btnigual" type="button" class="btn tex_main col-12"> = </button></span>
                                        <span class="col-sm-3 col-4"><button id="btnmayor" type="button" class="btn tex_main col-12"> &gt; </button></span>
                                        </div>
                                        </div>`;
            let btnmayor = document.getElementById("btnmayor");
            btnmayor.addEventListener("click", this.mayor.bind(this));
            
            let btnmenor = document.getElementById("btnmenor");
            btnmenor.addEventListener("click", this.menor.bind(this)); 
            let btnigual = document.getElementById("btnigual");
            btnigual.addEventListener("click", this.igual.bind(this)); 
            this.modo = "sin_tiempo"
        }

        mostrar_juego_con_tiempo() {
            
            this.contenedor.innerHTML = `<div class="row align-items-center justify-content-center cont">
                                        <div class="row justify-content-center">
                                        <span class="col-sm-3 col-4 borde "><h3 id="num1" class="tex_main ">${this.num1} * ${this.num2}</h3></span>
                                        <span class="col-3 borde"><h3 class="tex_main ">?</h3></span>
                                        
                                        <span class="col-sm-3 col-3 borde"><h3 id="num2" class="tex_main ">${this.num3}</h3></span>
                                        </div>
                                        <div><h2 class="tex_main">¿QUE SIMBOLO VA?</h2></div>
                                        <span class="col-3"><h3 class="tex_main" id="tiempo"></h3></span>
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
            document.getElementById("tiempo").innerText=`5`;
            

            
            this.modo = "con_tiempo"
            this.incorrecto =false 
            
            this.seg = 5

            this.set_tiempo = setInterval(()=>{
                this.seg--  
                
                if(this.incorrecto == false){document.getElementById("tiempo").innerText =`${this.seg}`;}
                

            if(this.seg <= 0 || this.incorrecto){
                clearInterval(this.set_tiempo)
                this.incorrecto != true && this.mostrar_incorrecto()

            }
            },500)

        }

        mostrar_correcto(){
            this.aciertos += 1  
            
            clearInterval(this.set_tiempo)
            
            
            if(this.modo==="sin_tiempo"){
                this.numeros(),this.resultado(),this.mostrar_juego_sin_tiempo()
                if(this.cuenta[2] != this.aciertos){
                    Toastify({
    
                        text: `CORRECTO llevas ${this.aciertos} aciertos`,
                        gravity: "bottom",
                        position: "right",
                        style: {
                            background: "#102742",
                            fontSize: "3rem", 
                            minWidth: "5rem", 
                        },
                        }).showToast();
                }else{
                    Toastify({
    
                        text: `Has alcanzado tu record de ${this.cuenta[2]}`,
                        gravity: "bottom",
                        position: "right",
                        style: {
                            background: "green",
                            fontSize: "3rem", 
                            minWidth: "5rem", 
                        }
                        }).showToast();
                }

            }else{
                this.numeros(),this.resultado(),this.mostrar_juego_con_tiempo()
                if(this.cuenta[1] != this.aciertos){
                    Toastify({
    
                        text: `CORRECTO llevas ${this.aciertos} aciertos`,
                        gravity: "bottom",
                        position: "right",
                        style: {
                            background: "#102742",
                            fontSize: "3rem", 
                            minWidth: "5rem", 
                        },
                        }).showToast();
                }else{
                    Toastify({
    
                        text: `Has alcanzado tu record de ${this.cuenta[1]}`,
                        gravity: "bottom",
                        position: "right",
                        style: {
                            background: "green",
                            fontSize: "3rem", 
                            minWidth: "5rem", 
                        }
                        }).showToast();
                }
            }
            
            
            
            
            
        }

        mostrar_incorrecto(){
                
                this.resultado()
                this.modo ==="sin_tiempo"? this.cuenta[2] = this.aciertos > this.cuenta[2] ? this.aciertos : this.cuenta[2]
                                                
                :  this.cuenta[1] = this.aciertos > this.cuenta[1] ? this.aciertos : this.cuenta[1]

                localStorage.setItem(`record_sin_tiempo`, this.cuenta[2]) 
                localStorage.setItem(`record_con_tiempo`, this.cuenta[1])
                
                
                
                this.incorrecto == true ? 
                
                
                
                this.contenedor.innerHTML =`<div class="row align-items-end justify-content-center cont">
                                            <div class="col-12"><h3 class="tex_main incorrecto">INCORRECTO</h3></div>
                                            <div class="col-12"><h3 class="tex_main ">${this.num4} ${this.sim} ${this.num3}</h3></div>
                                            <div class="col-10 row justify-content-center" id="img"><img class="img" src="./img/gato_lentes.webp" alt="gato reloj"></div>
                                            <div class="col-12"><h3 class="tex_main">Hiciste ${this.aciertos} aciertos</h3></div>
                                            <div class="col-10"><button id="btnvolver" type="button" class="btn tex_main  col-12">Volver</button></div>
                                            </div>`

                :this.contenedor.innerHTML =`<div class="row align-items-center justify-content-center cont">
                                            <div class="col-12"><h3 class="tex_main incorrecto">SE TE ACABO EL TIEMPO</h3></div>
                                            <div class="col-12"><h3 class="tex_main ">${this.num4} ${this.res} ${this.num3}</h3></div>
                                            <div class="col-11 row justify-content-center"><img class="img" src="./img/gato_reloj.webp" alt="gato reloj"></div>
                                            <div class="col-12"><h3 class="tex_main">Hiciste ${this.aciertos} aciertos</h3></div>
                                            <div class="col-10"><button id="btnvolver" type="button" class="btn tex_main  col-12">Volver</button></div>
                                            </div>`
                                            let btnmayor = document.getElementById("btnvolver");
                                            btnmayor.addEventListener("click", this.mostrar_start.bind(this));

                this.incorrecto= true                            
        }

        
            
        

        numeros() {
            this.num1 = Math.floor(Math.random() * 10) + 1;
            this.num2 = Math.floor(Math.random() * 10) + 1;
            this.num3 = Math.floor(Math.random() * 100) + 1;
        }

        resultado() {
            this.num4 = this.num1 * this.num2;
            this.res = this.num4 === this.num3 ? "=" : (this.res = this.num4 > this.num3 ? ">" : "<");
            return this.res;
        }

        mayor() {
            
            if(this.res===this.sim_mayor){
                this.respuesta = "correcto"
                
            }else{
                this.respuesta = "incorrecto"
                
            }
            if(this.respuesta ==="correcto"){
                this.sim = "es mayor que"
                this.mostrar_correcto() 
                
            }else{
                this.sim = "no es mayor que"
                this.incorrecto = true
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
                this.sim = "es menor que"
                this.mostrar_correcto() 
                
            }else{
                this.sim = "no es menor que"
                this.incorrecto = true
                this.mostrar_incorrecto()
                
                
            }
            
            return this.respuesta
        }

        igual() {
            
            if(this.res===this.sim_igual){
                this.respuesta = "correcto"
            }else{
                this.respuesta = "incorrecto"
            }
            if(this.respuesta ==="correcto"){
                this.sim = "es igual que"
                this.mostrar_correcto()
                
                
            }else{
                this.sim = "no es igual que"
                this.incorrecto = true
                this.mostrar_incorrecto()
                
            }
            
            return this.respuesta
        }

        
}

    function start() {
        const mon = new Mostrar()
        mon.mostrar_start()
        
    
    }

    start()




