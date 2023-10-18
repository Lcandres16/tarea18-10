/*Indicación
La interfaz Sundae incluye cuatro nuevas propiedades:
sauce del tipo de literal
'chocolate' I
'caramel'
"strawberry'
• nuts del tipo boolean (opcional)
whippedCream del tipo boolean (opcional)
instructions del tipo boolean (opcional)
@ Column (0ama */

interface Sundae {
    flavor: string
    scoops: number
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

function tooManyScoops(sundae: Sundae): string {
    if (sundae.scoops > 3) {
      return '¡Demasiadas bolas de helado!';
    } else {
      return 'Cantidad de bolas de helado aceptable.';
    }
  }
  const mySundae: Sundae = {
    flavor: 'vanilla',
    scoops: 5,
    sauce: 'chocolate',
    nuts: false,
    whippedCream: true,
    instructions: 'Add sprinkles on top'
  };
  const message = tooManyScoops(mySundae);
console.log(message);