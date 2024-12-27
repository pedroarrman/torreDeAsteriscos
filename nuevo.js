let opcion = prompt("Elige una letra de la A a la D");

    opcion = opcion.toLowerCase();

    menu(opcion);

function menu(opcion){

    let filas = Number(prompt("Introduce un numero de filas: ",1));  

    switch(opcion){
        case "a":
            opcionA(filas);
            break;

        case "b":
            opcionB(filas);
            break;  
            
        case "c":
            opcionC(filas);
            break;    

        case "d":
            opcionD(filas);
            break;
            
        default:
            alert('opcion incorrecta, no es A B C o D');
            break;    
    }
}

function opcionA(filas)
{  
    for (let contador=1; contador<=filas; contador++)
    {
        for (let recorrido=contador; recorrido>0; recorrido--)
            document.write("*");
            document.write("<br>");        
    }
    return("");
}

function opcionB(filas)
{
    for(let contador=filas; contador>=1; contador--)
    {
        for(let recorrido=contador; recorrido>0; recorrido--)
            document.write("*");
            document.write("<br>");
    }
    return("");
}

function opcionC(filas)
{
    for (let contador=1; contador<=filas; contador++)
    {   
        for (let recorrido=filas; recorrido > contador; recorrido--)
        {
            document.write("&nbsp;");
        }

        for (let longitud=0; longitud < contador; longitud++)
        {
            document.write("*");
        }

    document.write("<br>");
    }
    return("");
}

function opcionD(filas)
{
    for (let contador=1; contador<=filas; contador++)
    {
        for (let recorrido=filas; recorrido > contador; recorrido--)
        
            document.write("&nbsp;");
        

        for (let longitud=0; longitud < contador; longitud++)
        
            document.write("*");

            for (let vector=0; vector<contador-1; vector++)
            document.write("*");
        
        document.write("<br>");
    }    
}