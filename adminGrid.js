function funcBeforce() {
    $("#information").text("ожидание данных...");
}

function funcSuccess (data) {
    $("#information").text(data);
}

$(document).ready(function () {
    $("#load").bind("click", function() {
        $.ajax ({
            url: "content.php",
            type: "POST",
            data: ({
                name: "admin",
                number: 3
            }),
            dataType: "html",
            beforeSend: funcBeforce,
            success: funcSuccess
        });
    });
});