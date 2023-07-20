var mainarray = [];
function submit() 
{
    var submitarray = [];

    for (var j = 1; j <= 4; j++)
    {
        var name = document.getElementById("name_of_the_student_" + j).value;
        mainarray.push(name)
    }

    var length = mainarray.length

    for (var k = 0; k < length; k++)
    {
        submitarray.push("<h4>NAME - " + mainarray[k] + "</h4>");
    }

    document.getElementById("display_name_with_commas").innerHTML = submitarray;

    var removecommas = submitarray.join(" ");

    document.getElementById("display_name_without_commas").innerHTML = removecommas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    mainarray.sort();

    var sortarray = [];

    var length = mainarray.length

    for (var k = 0; k < length; k++)
    {
        sortarray.push("<h4>NAME - " + mainarray[k] + "</h4>");
    }
    
    var removecommas = sortarray.join(" ");

    document.getElementById("display_name_without_commas").innerHTML = removecommas;
}