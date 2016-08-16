function compare() {

    var history = [];
    var input1 = document.getElementById('input1').value.toUpperCase();
    var input2 = document.getElementById('input2').value.toUpperCase();

    if (input1 && input2 != '') {

        history.push(input1, ' | ', input2);

        $('#history').append('<br>', history);

        console.log(history); //TODO remove

        if (input1 != input2) {

            $('.message').append(' ERR hash keys DO NOT MATCH!').addClass("alert alert-danger");
        }
        else {
            $('.message').append(' hash is identical').removeClass("alert alert-danger").addClass("alert alert-success");
        }
    }

}