var  list_of_students = [];
function submit(){
    var display_list_of_students = [];

    for(i = 1; i <= 4; i++)
    {
        var name_of_student = document.getElementById("name_of_the_student_"+i).value;
        console.log(name_of_student);
        list_of_students.push(name_of_student);
    }

    console.log(list_of_students);

    var length_of_list = list_of_students.length;
    console.log(length_of_list);
    
    for (var k = 0; k < length_of_list; k++)
    {
        display_list_of_students.push("<h4>NAME -"+ list_of_students[k] + "</h4>");
        console.log(display_list_of_students);    
    }
    console.log(display_list_of_students);
    document.getElementById("display_name_with_commas").innerHTML = display_list_of_students;
    var no_commas = display_list_of_students.join(" ");
        console.log(no_commas);
        document.getElementById("display_name_without_commas").innerHTML = no_commas;

        document.getElementById("submit_button").style.display = "none";
        document.getElementById("sort_button").style.display = "inline-block";

        
}
function sorting()
{
list_of_students.sort();
console.log(list_of_students);

var display_student_list_sorting = [];

var length_of_list = list_of_students.length;
console.log(length_of_list);

for (var q = 0; q < length_of_list; q++)
{
    display_student_list_sorting.push("<h4>NAME -" + list_of_students[q] + "</h4>");

}

var no_commas = display_student_list_sorting.join(" ");
console.log(no_commas);

document.getElementById("display_name_without_commas").innerHTML = no_commas;
}
