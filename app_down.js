$(document).ready(function() {

    var rootRef = firebase.database().ref();

    rootRef.on("child_added", snap => {

        var name = snap.child("Name").val();
        var link = snap.child("Link").val();
        $("#table_body").append("<tr><td>" + name + "</td><td> <a href=" + link + ">Download</a></td></td>");
    });
});