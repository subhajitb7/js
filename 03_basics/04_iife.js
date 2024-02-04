// Immediately Invoked Function Expression (IIFE)

(function chai() {
    console.log(`DB Connect3d `);
})(); //here ; is used to end the IIFE 

( () => {
    console.log(`DB Connected 2`)
})();

( (name) => {
    console.log(`DB Connected to ${name}`)
})("Subhajit")