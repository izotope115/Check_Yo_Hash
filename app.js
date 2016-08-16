function compare() {

    var history = [];
    var input1 = document.getElementById('input1').value.toUpperCase();
    var input2 = document.getElementById('input2').value.toUpperCase();

    if (input1 && input2 != '') {
        history.push(input1, '<br><br>', input2);

            if (input1 != input2) {
               $('.message').append('<p class="alert alert-danger wrap"><strong>ERR</strong> Hash Keys <strong>DO NOT MATCH!<br><br>'+history.join('')+' </strong></p>');
            }

            else if (input1 === input2) {
               $('.message').append('<p class="alert alert-success wrap">Hash is Identical:<br><br> '+history.join('')+' </p>');
            }
    }

    else {
        $('.message').append('<p class="alert alert-warning wrap">Please Enter Your Has Keys</p>');

    }

}