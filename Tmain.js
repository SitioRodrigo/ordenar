function submit()
{
    var display_student_array = [];

    for (var j = 1; j <= 4; j++)
    {
        var Nombre_alumno_array = document.getElementById("name_of_the_student_"+j).value
        console.log(Nombre_alumno_array);
        display_student_array.push(Nombre_alumno_array);
    }

    console.log(display_student_array);

    var lenght_of_name_of_students_array = display_student_array.length;
    console.log(lenght_of_name_of_the_students_array);

    for (var k = 0; k < lenght_of_name_of_students_array; k++)
    {
        display_student_array.push("<h4>NAME -"+ name_of_the_student_array[k] + " </h4>");
        console.log(display_student_array[k]);

}

       console.log(display_student_array);
       document.getElementById("display_name_with_commas").innerHTML = display_student_array;

       var remove_commas = display_student_array.join(" ");
       console.log(remove_commas);
       document.getElementById("display_name_without_commas").innerHTML = remove_commas

       document.getElementById("submit_button").style.display = "none";
       document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array)
    
    var display_student_array_sorting = [];

    var lenght_name_of_the_students_array = lenght_name_of_the_students_array.length;
    console.log(lenght_name_of_the_students_array);
    }

    for (var i = 0; i < lenght_name_of_the_students_array; i++){
        
        display_student_array_sorting.push("<h4>NAME - "+ name_of_the_student_array[i] + "</h4>");
        document.getElementById("display_name_sorted").innerHTML = display_student_array_sorting.join("");
    }

    function new_update()
    {
      document.getElementById("display_name_without_commas").innerHTML = "<h1>"+ name_of_the_student_array + "</h1>"
}