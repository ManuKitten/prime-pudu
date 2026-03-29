function orderHeader(order) {
    // Creates a dynamic header and makes its paths work

    const body = document.getElementsByTagName("body")[0];
    const header = document.createElement("header");
    header.className = "pageHeader";
    let location = ""; // Calculates the path reference key based on the order parameter
    for (let i = 0; i < order; i++) {
        location += "../"
    }
    header.innerHTML = `<div id="headerDiv">
                            <a href="${location}">
                                <img src="${location}stock-images/primepudu.png" width="100">
                            </a>
                            <div class="signInDiv">
                                <button id="signInButton" onclick="window.location.href = '${location}signin'">Sign In</button>
                            </div>
                            <div id="signedDiv" class="signInDiv">
                                <p>Username</p>
                            </div>
                        </div>`
    body.insertBefore(header, body.children[0]);

    if (localStorage.getItem("username")) {
        document.getElementsByClassName("signInDiv")[0].style.display = "none";

        const signedDiv = document.getElementById("signedDiv");
        const signedDivText = signedDiv.getElementsByTagName("p")[0];
        signedDivText.textContent = localStorage.getItem("username");
        signedDivText.style.marginTop = "10px"
        signedDiv.style.display = "block";
    }
}