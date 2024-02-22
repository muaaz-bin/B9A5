
let clickCount = 0;

function handleButtonClick(buttonId) {

    if (clickCount < 4) {
        const button = document.getElementById(buttonId);

        console.log(button);

        // Change button color to green
        button.style.backgroundColor = '#1DD100';
        button.style.color = '#ffffff';

        // Disable the button
        button.disabled = true;

        // Increment click count
        clickCount++;
        if (clickCount == 4) {
            document.getElementById('couponApply').removeAttribute('disabled');
        }

        // Update click count display
        document.getElementById('clickCount').innerText = `${clickCount}`;
        document.getElementById('remainingSeat').innerText = parseInt(document.getElementById('remainingSeat').innerText) - 1;
        displayInfo(buttonId);
    }
    else {

        return alert('A user can buy maximum 4 tickets at a time!')
    }
}

function displayInfo(buttonId) {

    const button = document.getElementById(buttonId);

    // Get the button's name, class, and price from data attributes
    const name = button.getAttribute('data-name');
    const classType = button.getAttribute('data-class');
    const price = button.getAttribute('data-price');

    // message to display in the info div
    const message = `${name} --------- ${classType} ------- ${price}`;

    // Display the message in the info div
    const infoDiv = document.getElementById('infoDiv');
    infoDiv.innerText += message + '\n';

    // total price 
    const totalPrice = document.getElementById('totalPrice').innerText;
    document.getElementById('totalPrice').innerText = parseInt(totalPrice) + 550;

    // grand price 
    const grandPrice = document.getElementById('grandPrice').innerText;
    document.getElementById('grandPrice').innerText = parseInt(totalPrice) + 550;

    document.getElementById('couponApply').addEventListener('click', function () {
        const couponInput = document.getElementById('cuopon').value;

        if (couponInput === 'NEW15') {

            const grandPrice = document.getElementById('grandPrice').innerText;
            document.getElementById('grandPrice').innerText = grandPrice - (totalPrice * (10 / 100));

            // Disable the input field
            document.getElementById('couponField').setAttribute('hidden', 'hidden');
            document.getElementById('applied').removeAttribute('hidden');
        }
        else if (couponInput === 'Couple 20') {
            const grandPrice = document.getElementById('grandPrice').innerText;
            document.getElementById('grandPrice').innerText = grandPrice - (totalPrice * (13.3 / 100));

            document.getElementById('couponField').setAttribute('hidden', 'hidden');
            document.getElementById('applied').removeAttribute('hidden');
        }
        else {
           return alert("Please enter a valid coupon!");
        }
    })
}

function numberFunction() {
    let number = document.getElementById("number").value;
    console.log(number);
    if (clickCount != 0 && number != '') {
        document.getElementById('next').removeAttribute('disabled');
    } else {
        document.getElementById('next').setAttribute('disabled');
    }
}


