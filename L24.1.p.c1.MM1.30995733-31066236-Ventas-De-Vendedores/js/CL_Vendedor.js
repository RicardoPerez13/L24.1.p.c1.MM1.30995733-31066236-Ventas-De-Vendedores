export default class CL_Vendedor{
    constructor(n,m){
        this.nombre=n;
        this.montoventa=m;
    }
    set nombre(no){
        return this._nombre=no;
        }
        
        get nombre(){
        return this._nombre;
        }
    
    set montoventa(mo){
         return this._montoventa=mo;
        }
            
    get montoventa(){
        return this._montoventa;
        }


}