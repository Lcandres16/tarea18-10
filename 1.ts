/*interface IceCream {
    flavor: string;
    scoops: number;
  }
  
  const myIceCream: IceCream = {
    flavor: "Chocolate",
    scoops: 2
  };
  
  console.log("Sabor: " + myIceCream.flavor);
  console.log("Cantidad de bolas: " + myIceCream.scoops);
  
  Segundo Ejercicio 
  Mi Respuesta 
  


  interface IceCream {
    flavor: string;
    scoops: number;
  }
  
  const myIceCream: IceCream = {
    flavor: 'vanilla',
    scoops: 5
  };
  
  if (myIceCream.scoops > 3) {
    console.log('¡Demasiadas bolas de helado!');
  } else {
    console.log('¡Cantidad de bolas de helado aceptable!');
  }

  SOLUCION DEL PROFE
 
  

  interface IceCream {
    flavor: string;
    scoops: number;
  }
  
  function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
      return dessert.scoops + ' is too many scoops';
    } else {
      return 'Your order will be ready soon!';
    }
  }
  
  console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5 }));

  */
 