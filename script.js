function testWrite() {
  firebase.database().ref("test").set({
    message: "Firebase is working!"
  });
}

