export default class CL_Vendedores{
    constructor(){
        this.contventasmenores=0;
        this.contventasmayores=0;
        this.acumventas=0
    }

    procesarvendedores(ve){
        this.acumventas+=ve.montoventa;
        
        if(ve.montoventa>100){
            this.contventasmayores++;
        }
        else{
            this.contventasmenores++;
        }

    }


}
