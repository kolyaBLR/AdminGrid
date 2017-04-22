function tag(tag) {
    return "<" + tag + ">";
}

function doubleTag(tag, value) {
    return "<" + tag + ">" + value + "</" + tag + ">";
}

function funcBeforce() {
    $("#entities-grid").text("Ожидание данных...");
}

function funcSuccess (data) {
    var htmlCode = "";
    htmlCode += tag("table") + tag("tr");
    htmlCode += tag("td") + doubleTag("label style='font-size:120%'", "id:") + tag("/td");
    htmlCode += tag("td") + doubleTag("input type='text'", "") + tag("/td");
    htmlCode += tag("td") + doubleTag("label style='font-size:120%'", "email:") + tag("/td");
    htmlCode += tag("td") + doubleTag("input type='text'", "") + tag("/td");
    htmlCode += tag("td") + doubleTag("button class='btn' style='height: 90%'", "Поиск") + tag("/td");
    htmlCode += tag("/tr") + tag("/table");

    htmlCode += tag("div class='table-responsive'");
    htmlCode += tag("table class='table table-bordered table-hover table-condensed'");
    htmlCode += tag("thead") + tag("tr");
    htmlCode += doubleTag("th", "id");
    htmlCode += doubleTag("th", "last name");
    htmlCode += doubleTag("th", "first name");
    htmlCode += doubleTag("th", "email");
    htmlCode += doubleTag("th", "password");
    htmlCode += doubleTag("th", "role");
    htmlCode += doubleTag("th", "subscription");
    htmlCode += tag("/tr") + tag("/thead") + tag("tbody");
    for (var i = 0; i < data.length; i++) {
        htmlCode += tag("tr");
        for (var j = 0; j < data[i].length; j++) {
            htmlCode += doubleTag("td", data[i][j]);
        }
        htmlCode += tag("/tr");
    }
    htmlCode += tag("/tbody") + tag("/table") + tag("/div");
    $("#entities-grid").html(htmlCode);
}

function showUsers(dataUrl, sortableColumns, filterableColumns, rowsPerPage) {
    $.ajax ({
        url: dataUrl,
        type: "GET",
        data: ({
            dataUrl: dataUrl,
            sortableColumns: sortableColumns,
            filterableColumns: filterableColumns,
            rowsPerPage: rowsPerPage
        }),
        dataType: "json",
        beforeSend: funcBeforce,
        success: funcSuccess
    });
}