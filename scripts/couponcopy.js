function copyTextToClipboard() {
    // Select the text
    const textToCopy = document.getElementById('copyText');
    const textRange = document.createRange();
    textRange.selectNode(textToCopy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(textRange);

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Deselect the text
    window.getSelection().removeAllRanges();

    //feedback to the user
    alert('Coupon copied to clipboard!');
}

// click event listener to the text element
document.getElementById('copyText').addEventListener('click', copyTextToClipboard);

// for couple20 coupon

function copyTextToClipboard2() {
    // Select the text
    const textToCopy = document.getElementById('couple');
    const textRange = document.createRange();
    textRange.selectNode(textToCopy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(textRange);

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Deselect the text
    window.getSelection().removeAllRanges();

    // feedback to the user
    alert('Coupon copied to clipboard!');
}
document.getElementById('couple').addEventListener('click', copyTextToClipboard2);