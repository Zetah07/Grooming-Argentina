const showAlert = (message, color) => {
  const alertDiv = document.createElement("div");
  alertDiv.classList.add(
    "alert",
    "text-center",
    "position-fixed",
    "top-50",
    "w-100"
  );
  alertDiv.style.zIndex = "9999";

  if (color === "green") {
    alertDiv.classList.add("alert-success");
  } else if (color === "red") {
    alertDiv.classList.add("alert-danger");
  }

  alertDiv.textContent = message;
  document.body.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.classList.add("hide");
    setTimeout(() => {
      document.body.removeChild(alertDiv);
    }, 600);
  }, 3000);
};

export default showAlert;
