//Scroll Top Button
// "listens" for when the window is scrolled on. When a scroll happens, "scrollFunction" is executed
$(window).scroll(scrollFunction);

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
    if ($(window).scrollTop() > 10) {
        $("#go-top-button").show();
    } else {
        $("#go-top-button").hide();
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $(window).scrollTop(0);
}

//Get all buttons
var updateBtns = document.getElementsByClassName('update-basket')

//add an event listener to each button & execute function
//function gets ID & action 
for (i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function () {
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId, 'Action:', action)
        console.log('USER:', user)

        if (user == 'AnonymousUser') {
            console.log('User is not authenticated')

        } else {
            updateUserOrder(productId, action)
        }


    })
}

function updateUserOrder(productId, action) {
    console.log('User is authenticated, sending data...')

    var url = '/update_item/'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({ 'productId': productId, 'action': action })
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log('data:', data)
            location.reload()
        });
}
