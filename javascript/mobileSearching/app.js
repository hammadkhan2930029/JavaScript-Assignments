var mobiles = {
    apple: {
        iphonex: {
            imagee: "https://www.shoplo.pk/wp-content/uploads/2021/03/iphone-X-2.png",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        iphonexr: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        iphone13: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        iphone12: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        iphone13mini: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
    },

    infinix: {
        hot10s: {
            imagee: "https://infinix-staging-s3.s3.ap-south-1.amazonaws.com/media/gmsoyloi/jevf-eo-1000x1497-px.png",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        hot10play: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        note10: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        note12: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        hotplay: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
    },

    samsung: {
        note8: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        note9: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        a8: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        j5: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        coreprime: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
    },

    vivo: {
        y55: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        x80: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        v23: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        y55: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        v23e: {
            imagee: "dsvs",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
    },
};



var dropdown = document.getElementById('dropdown');
var inputs = document.getElementById('inputMobile');
for (key in mobiles) {
    var options = document.createElement('option')
    options.innerHTML = key
    dropdown.appendChild(options)
}
function geetvalue() {

    var result = dropdown.options[dropdown.selectedIndex].value;
    var mobileFeatures = inputs.value.toLowerCase();
    var cards = document.getElementById('card');
    cards.innerHTML = `
    <div class="mobile_model">
    <img src="${mobiles[result][mobileFeatures].imagee}" id="img" alt="">
    <p>Mobile memory is : RAM ${mobiles[result][mobileFeatures].memory}</p>
    <p>Colors Available : ${mobiles[result][mobileFeatures].colors}</p>
    </div>
    `
}

var arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

var postDate = new Date();
var time = postDate.toLocaleTimeString().split("");
console.log(time)
time.splice(4, 3);
var date = arr[postDate.getMonth()] + " " + postDate.getDate() + " at " + time.join("");







