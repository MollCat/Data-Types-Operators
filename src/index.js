const answer = "Moneytrees29";
let user = '';

while (user != answer) {
    user = prompt("Please Login");

    if (user == answer) {
        alert("Access Granted!");
    }   else {
        alert("Please Try Again")
    }
}