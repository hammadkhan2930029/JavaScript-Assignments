//  random pass

var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q"
    , "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "!", "@", "#", "$", "%", "&", "*"];

for (var i = 0; i <= 8; i++) {

    var randomNum = Math.floor(Math.random() * random.length);
    // document.write("<h1><br>Genreat Random Password :</h1>"+random[randomNum]);
    document.write(random[randomNum]);
}
document.write(`<h2>
        <a href="../index.html"> Back to home</a>

    </h2>`)
