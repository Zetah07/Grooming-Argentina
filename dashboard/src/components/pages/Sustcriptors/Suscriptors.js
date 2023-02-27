import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "../../../api/axios";

const Suscriptores = () => {
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState();
  const [suscriptors, setSuscriptors] = useState([]);
  const getSuscriptors = async () => {
    try {
      const response = await axios.get("/newsLetter");
      setSuscriptors(response.data);
    } catch (error) {
      setErrors(error.message);
    }
  };

  useEffect(() => {
    getSuscriptors();
  }, []);

  return (
    <div className="container">
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre completo</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {errors
            ? ((<tr>Error {errors}</tr>), console.log(errors))
            : suscriptors
                .slice(perPage * (page - 1), perPage * page)
                .map((suscriber, index) => {
                  return (
                    <tr key={index}>
                      <td>{perPage * (page - 1) + index + 1}</td>
                      <td>{suscriber["fullName"]}</td>
                      <td>{suscriber.email}</td>
                    </tr>
                  );
                })}
        </tbody>
        <tfoot>
          <tr aria-label="...">
            <td class="pagination">
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
              {page + 1 <= Math.ceil(suscriptors.length / perPage) && (
                <li class="page-item">
                  <button class="page-link" onClick={() => setPage(page + 1)}>
                    {page + 1}
                  </button>
                </li>
              )}
              {page + 2 <= Math.ceil(suscriptors.length / perPage) && (
                <li class="page-item">
                  <button class="page-link" onClick={() => setPage(page + 2)}>
                    {page + 2}
                  </button>
                </li>
              )}
              <li
                class={
                  page < Math.ceil(suscriptors.length / perPage)
                    ? "page-item"
                    : "page-item disabled"
                }
              >
                <button class="page-link" onClick={() => setPage(page + 1)}>
                  Next
                </button>
              </li>
            </td>
            <td>
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-lg example"
              onChange={(event)=> {setPerPage(event.target.value); setPage(1)}}
            >
              <option disabled selected>Registros por pagina</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};
export default Suscriptores;
