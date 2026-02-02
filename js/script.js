
var docoolstuff = function() { 
    var currentclass = document.getElementById('cool').className;

    if (currentclass == 'cool') {
    document.getElementById('cool').className = 'coolorange';
} else {
    document.getElementById('cool').className = 'cool';
}
};

console.log('Hello, Rocket!');