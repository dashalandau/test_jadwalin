document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("monthly-btn").addEventListener("click", function() {
        document.getElementById("monthly-btn").classList.add("active");
        document.getElementById("yearly-btn").classList.remove("active");
        document.querySelector(".plans.monthly").style.display = "flex";
        document.querySelector(".plans.yearly").style.display = "none";
    });

    document.getElementById("yearly-btn").addEventListener("click", function() {
        document.getElementById("monthly-btn").classList.remove("active");
        document.getElementById("yearly-btn").classList.add("active");
        document.querySelector(".plans.monthly").style.display = "none";
        document.querySelector(".plans.yearly").style.display = "flex";
    });

    document.getElementById("monthly-btn").click();
});