const result = document.getElementById("result");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", () => {
  generateOtp();
  setTimeout(() => {
    alert("OTP Generated 👍");
  }, 500);
});

const generateOtp = () => {
  let digits = "0987654321";
  let otp = "";

  for (let i = 0; i < 4; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  result.innerText = otp;
};
