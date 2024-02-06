let run_btn = document.querySelector(".run-btn");

run_btn.addEventListener("click", () => {
  let P = document.getElementById("Principle").value;
  let T = document.getElementById("Time").value;
  let CR = document.getElementById("Credit-Score").value;

  if (P >= 25000 && P <= 50000) {
    R = 2;
    document.getElementById("Rate-Text").innerText = `Your Rate: ${R}%`;
    SI = (P * R * T) / 100;
    document.getElementById(
      "SI-Text"
    ).innerText = `Your Simple Interest: INR ${SI}`;
    document.getElementById("Approval").style.opacity = "1";
  } else if ((P >= 50001 && P <= 120000 && CR >= 650) || CR >= 900) {
    R = 5;
    document.getElementById("Rate-Text").innerText = `Your Rate: ${R}%`;
    SI = (P * R * T) / 100;
    document.getElementById(
      "SI-Text"
    ).innerText = `Your Simple Interest: INR ${SI}`;
    document.getElementById("Approval").style.opacity = "1";
  } else if ((P >= 120001 && P <= 380000 && CR >= 650) || CR >= 900) {
    R = 6.5;
    document.getElementById("Rate-Text").innerText = `Your Rate: ${R}%`;
    SI = (P * R * T) / 100;
    document.getElementById(
      "SI-Text"
    ).innerText = `Your Simple Interest: INR ${SI}`;
    document.getElementById("Approval").style.opacity = "1";
  } else if ((P >= 380001 && P <= 500000 && CR >= 650) || CR >= 900) {
    R = 7.2;
    document.getElementById("Rate-Text").innerText = `Your Rate: ${R}%`;
    SI = (P * R * T) / 100;
    document.getElementById(
      "SI-Text"
    ).innerText = `Your Simple Interest: INR ${SI}`;
    document.getElementById("Approval").style.opacity = "1";
  } else if ((P >= 500001 && P <= 1200000 && CR >= 650) || CR >= 900) {
    R = 8.7;
    document.getElementById("Rate-Text").innerText = `Your Rate: ${R}%`;
    SI = (P * R * T) / 100;
    document.getElementById(
      "SI-Text"
    ).innerText = `Your Simple Interest: INR ${SI}`;
    document.getElementById("Approval").style.opacity = "1";
  } else if ((P >= 1200001 && P <= 3200000 && CR >= 650) || CR >= 900) {
    R = 9.8;
    document.getElementById("Rate-Text").innerText = `Your Rate: ${R}%`;
    SI = (P * R * T) / 100;
    document.getElementById(
      "SI-Text"
    ).innerText = `Your Simple Interest: INR ${SI}`;
    document.getElementById("Approval").style.opacity = "1";
  } else {
    document.getElementById("Denial").style.opacity = "1";
  }
});
