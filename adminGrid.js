function tag(tag) {
    return "<" + tag + ">";
}

function doubleTag(tag, value) {
    return "<" + tag + ">" + value + "</" + tag + ">";
}

function showFilter(filter) {
    var htmlCode = "";
    htmlCode += tag("table") + tag("tr");
    for (var i = 0; i < filter.length; i++) {
        htmlCode += tag("td") + doubleTag("label style='font-size:120%'", filter[i]) + tag("/td");
        htmlCode += tag("td") + doubleTag("input type='text'", "") + tag("/td");
    }

    htmlCode += tag("td") + doubleTag("button class='btn' style='height: 90%'", "Поиск") + tag("/td");
    htmlCode += tag("/tr") + tag("/table");
    $("#entities-grid").append(htmlCode);
}

function showGrid(data) {
    var htmlCode = "";
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
    $("#entities-grid").append(htmlCode);
}

function showPagination(count) {
    var htmlCode = "";
    htmlCode += tag("ul class='pagination'");
    for (var i = 0; i < count; i++) {
        htmlCode += tag("li");
        htmlCode += doubleTag("a href='#'", i);
        htmlCode += tag("/li");
    }
    htmlCode += tag("/ul");
    $("#entities-grid").append(htmlCode);
}

function queryUsersAjax(url) {
    $.ajax ({
        url: url,
        type: "GET",
        data: ({
        }),
        dataType: "json",
        success: showGrid
    });
}

function queryCountPageAjax(url) {
    $.ajax ({
        url: url,
        type: "POST",
        dataType: "text",
        success: showPagination
    });
}

function open(dataUrl, countPageUrl, sortableColumns, filterableColumns, rowsPerPage) {
    showFilter(filterableColumns);
    queryUsersAjax(dataUrl, rowsPerPage);
    queryCountPageAjax(countPageUrl);
}