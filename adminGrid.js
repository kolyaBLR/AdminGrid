function tag(tag) {
    return "<" + tag + ">";
}

function doubleTag(tag, value) {
    return "<" + tag + ">" + value + "</" + tag + ">";
}

function funcBeforce() {
    $("#entities-grid").text("ожидание данных...");
}

function funcSuccess (data) {
    var htmlCode = tag("div class='table-responsive'");
    htmlCode += tag("table class='table table-bordered table-hover table-condensed'");
    htmlCode += tag("thead");
    htmlCode += tag("tr");
    htmlCode += doubleTag("th", "id");
    htmlCode += doubleTag("th", "last name");
    htmlCode += doubleTag("th", "first name");
    htmlCode += doubleTag("th", "email");
    htmlCode += doubleTag("th", "password");
    htmlCode += doubleTag("th", "role");
    htmlCode += doubleTag("th", "subscription");
    htmlCode += tag("/tr");
    htmlCode += tag("/thead");
    htmlCode += tag("tbody");
    for (var i = 0; i < data.length; i++) {
        htmlCode += tag("tr");
        for (var j = 0; j < data[i].length; j++) {
            htmlCode += doubleTag("td", data[i][j]);
        }
        htmlCode += tag("/tr");
    }
    htmlCode += tag("/tbody");
    htmlCode += tag("/table");
    htmlCode += tag("/div");
    $("#entities-grid").html(htmlCode);
}

function showUsers() {
    $.ajax ({
        url: "content.php",
        type: "GET",
        data: ({
            page: 5,
            filterbyfield: "title",
            pattern: "smartphone"
        }),
        dataType: "json",
        beforeSend: funcBeforce,
        success: funcSuccess
    });
}