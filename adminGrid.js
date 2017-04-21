function funcBeforce() {
    $("#information").text("ожидание данных...");
}



function funcSuccess (data) {
    //data = json.Parse(data);
    var htmlCode = "<table><thead>";
    htmlCode += "<td>id</td><td>last name</td><td>first name</td><td>email</td><td>password</td><td>role</td><td>subscription</td>";
    htmlCode += "</thead>";
    htmlCode += "<tr><td>data.lastName</td><td>data.fisrtName</td><td>data.email</td><td>data.email</td><td>data.password</td></tr>";
    htmlCode += "</thead></table>";
    //$("#information").html(htmlCode);
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
            dataType: "text",
            beforeSend: funcBeforce,
            success: funcSuccess
        });
    });
});
