var pets = [];

function Pet ( petData ) {
    this.name = petData.name;
    this.type = petData.type;
    this.description = petData.description;
    this.strangeInfo = "Something else goes here.";
}

Pet.prototype.toHtml = function () {
    // console.log( 'we are giving Handlebars.compile:', $( '#pet-template' ).html() );
    // var template = document.getElementById('pet-template').innerHTML;
    var htmlGenerator = Handlebars.compile( $( '#pet-template' ).html() );
    // console.log( 'Handlebars.compile gives us a function:', template );

    // this.face = this.name + " is " + this.type + "cute";
    this.face = `${this.name} is ${this.type} cute!`;
    var filledTemplate = htmlGenerator( this );
    // console.log( 'template returns: ', filledTemplate );

    return filledTemplate;
}

// loops through array of pet DATA and creates pet OBJECTS
petObjects.forEach( pet => {
    pets.push( new Pet( pet ) );
});

// loops through array of pet OBJECTS and runs .toHTML()
pets.forEach( pet => {

    $( '#pets' ).append( pet.toHtml() );
});
