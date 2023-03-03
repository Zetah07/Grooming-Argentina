import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import RemoveUserButton from "../../RemoveUserButton/RemoveUserButton";

const DeleteUser = () => {
  const { auth } = useAuth();
  const [succesDelete, setSuccesDelete] = useState(false);
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState();
  const [users, setUsers] = useState([]);
  const getSuscriptors = async () => {
    try {
      const response = await axios.get("/users", {
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      setErrors(error.message);
    }
  };

  useEffect(() => {
    if (succesDelete === true && page > Math.ceil((users.length-1) / perPage)) {
        console.log("ejecucion del Use effect");
      setPage(page-1);
    }
    getSuscriptors();
    setSuccesDelete(false);
  }, [succesDelete]);

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
      document.body.removeChild(alertDiv);
    }, 3000);
  }
  
  return (
    <div className="container">
      <h1>Eliminar usuario</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>DNI</th>
            <th>Email</th>
            <th>Nombre</th>
            <th>ROL</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {errors
            ? ((<tr>Error {errors}</tr>), console.log(errors))
            : users
                .slice(perPage * (page - 1), perPage * page)
                .map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{perPage * (page - 1) + index + 1}</td>
                      <td>{user["username"]}</td>
                      <td>{user.email}</td>
                      <td>{user["name"]}</td>
                      <td>{user["rol"]}</td>
                      <td>
                        <RemoveUserButton
                          document={user["username"]}
                          succesFn={setSuccesDelete}
                          alert={showAlert}
                          
                        />
                      </td>
                    </tr>
                  );
                })}
        </tbody>
      </Table>
      {/* Pagination */}
      <div
        aria-label="..."
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <ul class="pagination">
          <li class={page > 1 ? "page-item" : "page-item disabled"}>
            <button class="page-link" onClick={() => setPage(page - 1)}>
              Previous
            </button>
          </li>
          {page - 2 > 0 && (
            <li class="page-item">
              <button class="page-link" onClick={() => setPage(page - 2)}>
                {page - 2}
              </button>
            </li>
          )}
          {page - 1 > 0 && (
            <li class="page-item">
              <button class="page-link" onClick={() => setPage(page - 1)}>
                {page - 1}
              </button>
            </li>
          )}
          <li class="page-item active">
            <button class="page-link" onClick={() => setPage(page)}>
              {page}
            </button>
          </li>
          {page + 1 <= Math.ceil(users.length / perPage) && (
            <li class="page-item">
              <button class="page-link" onClick={() => setPage(page + 1)}>
                {page + 1}
              </button>
            </li>
          )}
          {page + 2 <= Math.ceil(users.length / perPage) && (
            <li class="page-item">
              <button class="page-link" onClick={() => setPage(page + 2)}>
                {page + 2}
              </button>
            </li>
          )}
          <li
            class={
              page < Math.ceil(users.length / perPage)
                ? "page-item"
                : "page-item disabled"
            }
          >
            <button class="page-link" onClick={() => setPage(page + 1)}>
              Next
            </button>
          </li>
        </ul>
        <ul>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-lg example"
            onChange={(event) => {
              setPerPage(event.target.value);
              setPage(1);
            }}
          >
            <option disabled>Registros por pagina</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </ul>
      </div>
    </div>
  );
};
export default DeleteUser;
