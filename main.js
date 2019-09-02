// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDvE3Xoz3D2j-EhfjQy2OaImMp44XodSPE",
	authDomain: "pgn-alums.firebaseapp.com",
	databaseURL: "https://pgn-alums.firebaseio.com",
	projectId: "pgn-alums",
	storageBucket: "pgn-alums.appspot.com",
	messagingSenderId: "836338480667",
	appId: "1:836338480667:web:8bc7d211b3082089"
};

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();
var alum = db.collection("data");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var email = user.email;
    document.getElementById("user_info").innerHTML = "Hi, " + email;
  } else {
    // User is signed out.
    // ...
  }
});

document.getElementById("signout").addEventListener("click", function(event) {
	firebase.auth().signOut().then(function() {
	console.log("signing out")
 	// Sign-out successful.
 	window.location.replace("signin.html");
	}).catch(function(error) {
	// An error happened.
	});
})


document.getElementById("search").addEventListener("submit", function(event) {
	event.preventDefault();

	var	input_type = document.getElementById("seachType").value;
	var	input_val = document.getElementById("searchInput").value;

	console.log("submitted");
	console.log(input_type);
	console.log(input_val);

	switch(input_type) {
		case "name":
			alum.where("name", "==", input_val)
			.get()
			.then(function(querySnapshot) {
				console.log("name");
				querySnapshot.forEach(function(doc) {
					console.log(doc.id, " => ", doc.data());
					if (doc !== undefined) {
	                    var tr = document.createElement('TR');
				        var n = document.createElement('TD')
				        n.appendChild(document.createTextNode(doc.data().name));
				        var gy = document.createElement('TD')
				        gy.appendChild(document.createTextNode(doc.data().grad_year));
				        var c = document.createElement('TD')
				        c.appendChild(document.createTextNode(doc.data().city));
				        var ce = document.createElement('TD')
				        ce.appendChild(document.createTextNode(doc.data().cemployer));
				        var t = document.createElement('TD')
				        t.appendChild(document.createTextNode(doc.data().title));
				        var e = document.createElement('TD')
				        e.appendChild(document.createTextNode(doc.data().email));
				        var p = document.createElement('TD')
				        p.appendChild(document.createTextNode(doc.data().phone));
				        var pe = document.createElement('TD')
				        pe.appendChild(document.createTextNode(doc.data().prev_employer[0]));
				        if (doc.data().prev_employer.length >= 1) {
					        for (i = 1; i < doc.data().prev_employer.length; ++i) {
					        	pe.appendChild(document.createTextNode(", " + doc.data().prev_employer[i]));

					        }
				        }
				        
				        tr.appendChild(n)
				        tr.appendChild(gy)
				        tr.appendChild(c)
				        tr.appendChild(ce)
				        tr.appendChild(t)
				        tr.appendChild(e)
				        tr.appendChild(p)
				        tr.appendChild(pe)
					    document.getElementById("alum_list").appendChild(tr);
		            }
				});
			})
			.catch(function(error) {
				console.log("Error getting documents: ", error);
			});
			break;

		case "grad_year":
			alum.where("grad_year", "==", input_val)
			.get()
			.then(function(querySnapshot) {
				console.log("grad_year");
				querySnapshot.forEach(function(doc) {
					console.log(doc.id, " => ", doc.data());
					if (doc !== undefined) {
	                    var tr = document.createElement('TR');
				        var n = document.createElement('TD')
				        n.appendChild(document.createTextNode(doc.data().name));
				        var gy = document.createElement('TD')
				        gy.appendChild(document.createTextNode(doc.data().grad_year));
				        var c = document.createElement('TD')
				        c.appendChild(document.createTextNode(doc.data().city));
				        var ce = document.createElement('TD')
				        ce.appendChild(document.createTextNode(doc.data().cemployer));
				        var t = document.createElement('TD')
				        t.appendChild(document.createTextNode(doc.data().title));
				        var e = document.createElement('TD')
				        e.appendChild(document.createTextNode(doc.data().email));
				        var p = document.createElement('TD')
				        p.appendChild(document.createTextNode(doc.data().phone));
				        var pe = document.createElement('TD')
				        pe.appendChild(document.createTextNode(doc.data().prev_employer[0]));
				        if (doc.data().prev_employer.length >= 1) {
					        for (i = 1; i < doc.data().prev_employer.length; ++i) {
					        	pe.appendChild(document.createTextNode(", " + doc.data().prev_employer[i]));

					        }
				        }
				        
				        tr.appendChild(n)
				        tr.appendChild(gy)
				        tr.appendChild(c)
				        tr.appendChild(ce)
				        tr.appendChild(t)
				        tr.appendChild(e)
				        tr.appendChild(p)
				        tr.appendChild(pe)
					    document.getElementById("alum_list").appendChild(tr);
		            }
				});
			})
			.catch(function(error) {
				console.log("Error getting documents: ", error);
			});
			break;

		case "city":
			alum.where("city", "==", input_val)
			.get()
			.then(function(querySnapshot) {
				console.log("city");
				querySnapshot.forEach(function(doc) {
					console.log(doc.id, " => ", doc.data());
					if (doc !== undefined) {
	                    var tr = document.createElement('TR');
				        var n = document.createElement('TD')
				        n.appendChild(document.createTextNode(doc.data().name));
				        var gy = document.createElement('TD')
				        gy.appendChild(document.createTextNode(doc.data().grad_year));
				        var c = document.createElement('TD')
				        c.appendChild(document.createTextNode(doc.data().city));
				        var ce = document.createElement('TD')
				        ce.appendChild(document.createTextNode(doc.data().cemployer));
				        var t = document.createElement('TD')
				        t.appendChild(document.createTextNode(doc.data().title));
				        var e = document.createElement('TD')
				        e.appendChild(document.createTextNode(doc.data().email));
				        var p = document.createElement('TD')
				        p.appendChild(document.createTextNode(doc.data().phone));
				        var pe = document.createElement('TD')
				        pe.appendChild(document.createTextNode(doc.data().prev_employer[0]));
				        if (doc.data().prev_employer.length >= 1) {
					        for (i = 1; i < doc.data().prev_employer.length; ++i) {
					        	pe.appendChild(document.createTextNode(", " + doc.data().prev_employer[i]));

					        }
				        }
				        
				        tr.appendChild(n)
				        tr.appendChild(gy)
				        tr.appendChild(c)
				        tr.appendChild(ce)
				        tr.appendChild(t)
				        tr.appendChild(e)
				        tr.appendChild(p)
				        tr.appendChild(pe)
					    document.getElementById("alum_list").appendChild(tr);
		            }
				});
			})
			.catch(function(error) {
				console.log("Error getting documents: ", error);
			});
			break;

		case "cemployer":
			alum.where("employer", "==", input_val)
			.get()
			.then(function(querySnapshot) {
				console.log("cemployer");
				querySnapshot.forEach(function(doc) {
					console.log(doc.id, " => ", doc.data());
					if (doc !== undefined) {
	                    var tr = document.createElement('TR');
				        var n = document.createElement('TD')
				        n.appendChild(document.createTextNode(doc.data().name));
				        var gy = document.createElement('TD')
				        gy.appendChild(document.createTextNode(doc.data().grad_year));
				        var c = document.createElement('TD')
				        c.appendChild(document.createTextNode(doc.data().city));
				        var ce = document.createElement('TD')
				        ce.appendChild(document.createTextNode(doc.data().cemployer));
				        var t = document.createElement('TD')
				        t.appendChild(document.createTextNode(doc.data().title));
				        var e = document.createElement('TD')
				        e.appendChild(document.createTextNode(doc.data().email));
				        var p = document.createElement('TD')
				        p.appendChild(document.createTextNode(doc.data().phone));
				        var pe = document.createElement('TD')
				        pe.appendChild(document.createTextNode(doc.data().prev_employer[0]));
				        if (doc.data().prev_employer.length >= 1) {
					        for (i = 1; i < doc.data().prev_employer.length; ++i) {
					        	pe.appendChild(document.createTextNode(", " + doc.data().prev_employer[i]));

					        }
				        }
				        
				        tr.appendChild(n)
				        tr.appendChild(gy)
				        tr.appendChild(c)
				        tr.appendChild(ce)
				        tr.appendChild(t)
				        tr.appendChild(e)
				        tr.appendChild(p)
				        tr.appendChild(pe)
					    document.getElementById("alum_list").appendChild(tr);
		            }
				});
			})
			.catch(function(error) {
				console.log("Error getting documents: ", error);
			});
			break;

		case "title":
			alum.where("title", "==", input_val)
			.get()
			.then(function(querySnapshot) {
				console.log("title");
				querySnapshot.forEach(function(doc) {
					console.log(doc.id, " => ", doc.data());
					if (doc !== undefined) {
	                    var tr = document.createElement('TR');
				        var n = document.createElement('TD')
				        n.appendChild(document.createTextNode(doc.data().name));
				        var gy = document.createElement('TD')
				        gy.appendChild(document.createTextNode(doc.data().grad_year));
				        var c = document.createElement('TD')
				        c.appendChild(document.createTextNode(doc.data().city));
				        var ce = document.createElement('TD')
				        ce.appendChild(document.createTextNode(doc.data().cemployer));
				        var t = document.createElement('TD')
				        t.appendChild(document.createTextNode(doc.data().title));
				        var e = document.createElement('TD')
				        e.appendChild(document.createTextNode(doc.data().email));
				        var p = document.createElement('TD')
				        p.appendChild(document.createTextNode(doc.data().phone));
				        var pe = document.createElement('TD')
				        pe.appendChild(document.createTextNode(doc.data().prev_employer[0]));
				        if (doc.data().prev_employer.length >= 1) {
					        for (i = 1; i < doc.data().prev_employer.length; ++i) {
					        	pe.appendChild(document.createTextNode(", " + doc.data().prev_employer[i]));

					        }
				        }
				        
				        tr.appendChild(n)
				        tr.appendChild(gy)
				        tr.appendChild(c)
				        tr.appendChild(ce)
				        tr.appendChild(t)
				        tr.appendChild(e)
				        tr.appendChild(p)
				        tr.appendChild(pe)
					    document.getElementById("alum_list").appendChild(tr);
		            }
				});
			})
			.catch(function(error) {
				console.log("Error getting documents: ", error);
			});
			break;

		case "pemployer":
			alum.where("prev_employer", "array-contains", input_val)
			.get()
			.then(function(querySnapshot) {
				console.log("pemployer");
				querySnapshot.forEach(function(doc) {
					console.log(doc.id, " => ", doc.data());
					if (doc !== undefined) {
	                    var tr = document.createElement('TR');
				        var n = document.createElement('TD')
				        n.appendChild(document.createTextNode(doc.data().name));
				        var gy = document.createElement('TD')
				        gy.appendChild(document.createTextNode(doc.data().grad_year));
				        var c = document.createElement('TD')
				        c.appendChild(document.createTextNode(doc.data().city));
				        var ce = document.createElement('TD')
				        ce.appendChild(document.createTextNode(doc.data().cemployer));
				        var t = document.createElement('TD')
				        t.appendChild(document.createTextNode(doc.data().title));
				        var e = document.createElement('TD')
				        e.appendChild(document.createTextNode(doc.data().email));
				        var p = document.createElement('TD')
				        p.appendChild(document.createTextNode(doc.data().phone));
				        var pe = document.createElement('TD')
				        pe.appendChild(document.createTextNode(doc.data().prev_employer[0]));
				        if (doc.data().prev_employer.length >= 1) {
					        for (i = 1; i < doc.data().prev_employer.length; ++i) {
					        	pe.appendChild(document.createTextNode(", " + doc.data().prev_employer[i]));

					        }
				        }
				        
				        tr.appendChild(n)
				        tr.appendChild(gy)
				        tr.appendChild(c)
				        tr.appendChild(ce)
				        tr.appendChild(t)
				        tr.appendChild(e)
				        tr.appendChild(p)
				        tr.appendChild(pe)
					    document.getElementById("alum_list").appendChild(tr);
		            }
				});
			})
			.catch(function(error) {
				console.log("Error getting documents: ", error);
			});
			break;
	}
});

