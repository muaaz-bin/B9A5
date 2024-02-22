// function for buy tickets button 
function scrollToSection() {
    // Select the target section
    const section = document.getElementById('targetSection');

    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });
}















function copyTextToClipboard() {
    // Select the text
    const textToCopy = document.getElementById('copyText', 'couple');
    const textRange = document.createRange();
    textRange.selectNode(textToCopy);
    window.getSelection().removeAllRanges(); // Clear previous selections
    window.getSelection().addRange(textRange);

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Deselect the text
    window.getSelection().removeAllRanges();

    // Optionally, provide some feedback to the user
    alert('Text copied to clipboard!');
}

// Add a click event listener to the text element
document.getElementById('copyText', 'couple').addEventListener('click', copyTextToClipboard);

// // for couple 20
// function copyTextToClipboard() {
//     // Select the text
//     const textToCopy = document.getElementById('couple');
//     const textRange = document.createRange();
//     textRange.selectNode(textToCopy);
//     window.getSelection().removeAllRanges(); // Clear previous selections
//     window.getSelection().addRange(textRange);

//     // Copy the selected text to the clipboard
//     document.execCommand('copy');

//     // Deselect the text
//     window.getSelection().removeAllRanges();

//     // Optionally, provide some feedback to the user
//     alert('Text copied to clipboard!');
// }

// // Add a click event listener to the text element
// document.getElementById('couple').addEventListener('click', copyTextToClipboard);