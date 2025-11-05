const firebaseConfig = {
  apiKey: "AIzaSyC3KN3dkAFavThXqq2Cx_jkrWp3AOHL_08",
  authDomain: "school-admission-form-7a42c.firebaseapp.com",
  databaseURL: "https://school-admission-form-7a42c-default-rtdb.firebaseio.com",
  projectId: "school-admission-form-7a42c",
  storageBucket: "school-admission-form-7a42c.appspot.com",
  messagingSenderId: "853789963360",
  appId: "1:853789963360:web:a7423a6d7d0c104eefbf05"
};

var app = firebase.initializeApp(firebaseConfig);

function addDataInDatabase() {
  var e,
    t = document.getElementById("fullname"),
    a = document.getElementById("guardianname"),
    i = document.getElementById("email"),
    o = document.getElementById("guardianphonenumber"),
    r = document.getElementById("childage"),
    n = document.getElementById("dateofbirth"),
    l = document.getElementById("placeofbirth"),
    d = document.getElementById("religion"),
    m = document.getElementById("nationality"),
    s = document.getElementById("gender"),
    u = document.getElementById("bFormNo"),
    f = {
      fullName: t.value,
      guardianfullname: a.value,
      email: i.value,
      guardianphonenumber: o.value,
      childage: r.value,
      dateofbirth: n.value,
      placeofbirth: l.value,
      religion: d.value,
      nationality: m.value,
      gender: s.value,
      bformnumber: u.value
    };
  var c = new Date().getFullYear(),
    Y = f.dateofbirth.split("").reverse().join("").replaceAll(" ", "").slice(0, 4).split("").reverse().join(""),
    g = c - Number(Y) == Number(f.childage),
    b = c - Number(Y) - 1 == Number(f.childage);
  function h(e, t) {
    return moment(e, t, !0).isValid();
  }
  "Select your Religion" == f.religion && (f.religion = ""),
    "Select Child's Gender" == f.gender && (f.gender = "");
  for (var p = 0; p < Object.keys(f).length; p++) e = "" != Object.values(f)[p];
  if (0 == e) alert("Please fill all of the fields");
  else if (1 == e)
    if (1 == h(f.dateofbirth, "DD/MM/YYYY") || 1 == h(f.dateofbirth, "DD-MM-YYYY") || 1 == h(f.dateofbirth, "DD MM YYYY") || 1 == h(f.dateofbirth, "D/MM/YYYY") || 1 == h(f.dateofbirth, "D-MM-YYYY") || 1 == h(f.dateofbirth, "D MM YYYY") || 1 == h(f.dateofbirth, "DD/M/YYYY") || 1 == h(f.dateofbirth, "DD-M-YYYY") || 1 == h(f.dateofbirth, "DD M YYYY") || 1 == h(f.dateofbirth, "D/M/YYYY") || 1 == h(f.dateofbirth, "D-M-YYYY") || 1 == h(f.dateofbirth, "D M YYYY"))
      if (1 == g || 1 == b) {
        var y = document.getElementById("email"),
          D = Date.now().toString(15),
          v = firebase.database().ref("StudentData/" + D),
          B = document.getElementById("loadingBar");
        B.style.display = "grid",
          v.set(f, function (e) {
            e
              ? (alert("Data could not be stored:", e), B.style.display = "none")
              : (setTimeout(function () {
                  window.location.replace(window.location.href);
                }, 5e3),
                B.style.display = "none",
                setTimeout(function () {
                  Swal.fire({
                    title: "Form is Submitted",
                    text: `Form is submitted, You will be notified on gmail: ${y.value}`,
                    icon: "success",
                    timer: 4e3,
                    timerProgressBar: !0,
                    showConfirmButton: !1
                  });
                }, 1e3));
          });
      } else alert("there is an error in your given date of birth or age");
    else alert("Enter Date Of Birth Correctly (if date of birth is correct and getting error refresh this page)");
}