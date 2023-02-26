import useLogout from "../../hooks/useLogout";
import { Button } from "react-bootstrap";



const LogoutButton = () => {
  const logout = useLogout()

  const handleLogOut = async () => {
    await logout()
    showAlert("Se ha cerrado la sesión", "green")
  }

  const showAlert = (message, color) => {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", "text-center");

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

  return (
    <Button onClick={handleLogOut}>Cerrar sesión</Button>
  )
}

export default LogoutButton