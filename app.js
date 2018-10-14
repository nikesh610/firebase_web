var file_data = document.getElementById("file_data");

//Button Click Event --Dumped
function upload() {

    var t1 = document.getElementById('t1').value;
    var t2 = document.getElementById('t2').value;

    firebaseRef = firebase.database().ref();
    firebaseRef.child(t1).set(t2);
}



fileButton = document.getElementById('file_data');

fileButton.addEventListener('change', function(e) {
    var file = e.target.files[0];
    var storageRef = firebase.storage().ref('/uploads/' + file.name);
    var task = storageRef.put(file);

    task.on('state_changed',
        function(snapshot) {
            alert("Uploading Content");
        },

        function(error) {
            alert("Something Went Wrong");

        },
        function() {
            alert("Sucessfully Uploaded");
            //window.open("up.html", "_self");
            task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
                var t1 = document.getElementById('t1').value;
                var firebaseRef = firebase.database().ref(t1);
                firebaseRef.child("Name").set(t1);
                firebaseRef.child("Link").set(downloadURL);

            });
        });
});