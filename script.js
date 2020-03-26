< script >
    var name = "Iheakachi";
var courses = ["HTML", "CSS", "JavaScript", "Go"];
if ((courses.length % 2) == 0) {
    // even number
    for (var i = 1; i <= 200; i = i + 1) {
        if (i % 2 == 0) {
            document.write(i);
            document.write("</br>");
        }
    }
} else {
    for (var i = 1; i <= 200; i = i + 1) {
        if (i % 2 != 0) {
            document.write(i);
            document.write("</br>");
        }
    }
} 
</script>
