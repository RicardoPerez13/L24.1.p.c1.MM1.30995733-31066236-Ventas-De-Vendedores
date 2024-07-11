import CL_Vendedor from "./CL_Vendedor.js";
import CL_Vendedores from "./CL_Vendedores.js";

let vende1=new CL_Vendedor('Mary',150);
let vende2=new CL_Vendedor('José',135);
let vende3=new CL_Vendedor('Carlos',160);
let vende4=new CL_Vendedor('Pedro',75);

let vendedores=new CL_Vendedores();

vendedores.procesarvendedores(vende1);
vendedores.procesarvendedores(vende2);
vendedores.procesarvendedores(vende3);
vendedores.procesarvendedores(vende4);

let salida=document.getElementById("salida")
salida.innerHTML="Reporte"
salida.innerHTML+="<br>Cantidad de ventas que fueron por 100$ o menos: "+vendedores.contventasmenores;
salida.innerHTML+="<br>Cantidad de ventas mayores a 100$: "+vendedores.contventasmayores;
salida.innerHTML+="<br>Monto total de las ventas: "+vendedores.acumventas+"$";