firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = 'index.html';
    } else {
    }
  });

$("#loginButton").on( "click", function(){
    firebase.auth().signInWithEmailAndPassword($("#inputEmail").val(), $("#inputPassword").val()).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        $("#problemAlert").removeClass("fade");
        $("#problemAlert").text(errorMessage);
      });
});

$("#signupButton").on( "click", function(){
    window.location.assign('signup.html');
});