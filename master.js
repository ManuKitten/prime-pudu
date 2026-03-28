if (localStorage.getItem("username")) {
    document.getElementsByClassName("signInDiv")[0].style.display = "none";

    const signedDiv = document.getElementById("signedDiv");
    const signedDivText = signedDiv.getElementsByTagName("p")[0];
    signedDivText.textContent = localStorage.getItem("username");
    signedDivText.style.marginTop = "10px"
    signedDiv.style.display = "block";
}