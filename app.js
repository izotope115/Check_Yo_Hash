function compare() {

    var history = [];
    var input1 = document.getElementById('input1').value.toUpperCase();
    var input2 = document.getElementById('input2').value.toUpperCase();

    if (input1 && input2 != '') {
        history.push(input1, ' | ', input2);
        $('#history').append('<br>', history);

            if (input1 != input2) {
               $('.message').append('<p class="alert alert-danger"><strong>ERR</strong> Hash Keys <strong>DO NOT MATCH!</strong></p>');

            }

            else if (input1 === input2) {
               $('.message').append('<p class="alert alert-success">Hash is Identical</p>');
            }
    }

    else {
        $('.message').append('<p class="alert alert-warning">Please Enter Your Has Keys</p>');
    }

}