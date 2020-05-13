var params = { 'text': ' Jayesh' };

$.ajax({
    type: "POST",
    url: "StudentListWebService.asmx/HelloWorld",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(params),
    dataType: "json",
    success: function (data) {
        console.log(data);
    },
    error: function (request, status, error) {
        console.log(request);
    }
});


params = { 'mark': 4 };
$.ajax({
    type: "POST",
    url: "StudentListWebService.asmx/GetStudentsGraterThan",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(params),
    dataType: "json",
    success: function (data) {
        console.log(data);
    },
    error: function (request, status, error) {
        console.log(request);
    }
});  