
document.addEventListener("DOMContentLoaded", function () {
    const msg = document.getElementById("msg");
    const visaSelect = document.getElementById("v");
    const form = document.getElementById("visaForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        let choice = visaSelect.value;
        msg.classList.remove("error", "success");

        // Define visa messages for each country
        const visaMessages = {
            "NA": { text: "Please Select A Country!", bg: "#222", color: "white" },
            "U": { text: "Visa required for most applicants.", bg: "linear-gradient(to right, red, white, red, white)", color: "blue" },
            "C": { text: "Visa required unless you have an eTA.", bg: "linear-gradient(to right, red, white, red, white)", color: "blue" },
            "I": { text: "Visa required before travel.", bg: "linear-gradient(to right, orange, white, green)", color: "darkblue" },
            "UK": { text: "Visa depends on the duration of stay.", bg: "linear-gradient(to right, darkblue, white, red)", color: "darkblue" },
            "AUS": { text: "eVisa available for eligible travelers.", bg: "linear-gradient(to right, darkblue, red)", color: "white" }
        };

        // Check if the selected country is valid
        if (visaMessages[choice]) {
            msg.textContent = visaMessages[choice].text;
            msg.style.background = visaMessages[choice].bg;
            msg.style.color = visaMessages[choice].color;
        } else {
            msg.textContent = "Invalid selection. Please try again.";
            msg.style.background = "#ff0000";
            msg.style.color = "white";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const msg = document.getElementById("msg");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let name = document.getElementById("name").value.trim();
        let passport = document.getElementById("passport").value.trim();
        let country = document.getElementById("v2").value;

        let valid = true;

        document.getElementById("n").textContent = "";
        document.getElementById("pass").textContent = "";
        document.getElementById("nat").textContent = "";
        msg.textContent = "";

        if (name === "") {
            document.getElementById("n").textContent = "* Name is required!";
            valid = false;
        }

        if (passport.length < 8 || passport.length > 10) {
            document.getElementById("pass").textContent = "* Passport number must be 8-10 characters!";
            valid = false;
        }

        if (country === "NA") {
            document.getElementById("nat").textContent = "* Please select a country!";
            valid = false;
        }

        if (valid) {
            msg.textContent = "Visa application submitted successfully!";
            msg.style.color = "green";
            form.submit();
        }
    });
});

