import React, { useState, useEffect } from "react";
import { Table, Button, Form } from "react-bootstrap";
import axios from "../../../api/axios";
import style from "./ManageVolunteers.module.css";
import DownloadReportButton from "../../downloadButton/downloadReportButton";
import useAuth from "../../../hooks/useAuth";
import DownloadPDFButton from "../../downloadAdjDocuments/DownloadAdjDocuments";
import ConfirmationModal from "./confirmationModal";
import Paginations from "./Pagination";
import SearchBar from "./Search";

const ManageVolunteers = () => {
  const [userStatusList, setUserStatusList] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [denyModal, setdenyModal] = useState(false);
  const [approvedModal, setApproveModal] = useState(false);
  const [pendingModal, setpendingModal] = useState(false);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filteredList, setFilteredList] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const { auth } = useAuth();

  useEffect(() => {
    const fetchUserStatusList = async () => {
      try {
        const response = await axios.get(
          `/userstatus?name=${name}&lastName=${lastName}&page=${
            page + 1
          }&limit=${limit}`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${auth?.accessToken}`,
            },
          }
        );

        const updatedList = response.data.docs.map((userStatus) => ({
          ...userStatus,
          fullName: `${userStatus.name} ${userStatus.lastName}`,
        }));
        setUserStatusList(updatedList);
        setFilteredList(updatedList);
        setPageCount(response.data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserStatusList();
  }, [auth?.accessToken, page, limit, name, lastName]);

  const handleStatusChange = async (id, newStatus) => {
    if (newStatus === "denegado") {
      setSelectedUserId(id);
      setdenyModal(true);
    } else if (newStatus === "aprobado") {
      setSelectedUserId(id);
      setApproveModal(true);
    } else if (newStatus === "pendiente") {
      setSelectedUserId(id);
      setpendingModal(true);
    } else {
      await updateStatus(id, newStatus);
      setSelectedUserId(null);
    }
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value
      ? event.target.value.toLowerCase()
      : "";
    const filtered = userStatusList.filter(
      (userStatus) =>
        userStatus.fullName.toLowerCase().includes(searchValue) ||
        userStatus.lastName.toLowerCase().includes(searchValue)
    );
    setFilteredList(filtered);
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(
        `/userstatus/${id}`,
        { status: newStatus },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${auth?.accessToken}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    const updatedList = userStatusList.map((userStatus) =>
      userStatus._id === id ? { ...userStatus, status: newStatus } : userStatus
    );
    setUserStatusList(updatedList);
    setFilteredList(updatedList);
    setSelectedUserId(null);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };
  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
    setPage(0);
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <br />

      <SearchBar value={name} onChange={(e) => handleSearch(e.target.value)} />
      <br />

      <ConfirmationModal
        show={denyModal}
        title="Denegar usuario"
        message="está seguro que desea denegar el proceso del usuario?"
        onConfirm={async () => {
          await updateStatus(selectedUserId, "denegado");
          setSelectedUserId(null);
          setdenyModal(false);
        }}
        onCancel={() => {
          setSelectedUserId(null);
          setdenyModal(false);
        }}
      />
      <ConfirmationModal
        show={approvedModal}
        title="Aprobación de usuario"
        message="Está seguro que desea aprobar el proceso usuario?"
        onConfirm={async () => {
          await updateStatus(selectedUserId, "aprobado");
          setSelectedUserId(null);
          setApproveModal(false);
        }}
        onCancel={() => {
          setSelectedUserId(null);
          setApproveModal(false);
        }}
      />
      <ConfirmationModal
        show={pendingModal}
        title="Volver a estado de proceso pendiente"
        message="está seguro que desea retoranr el estado a pendiente?"
        onConfirm={async () => {
          await updateStatus(selectedUserId, "pendiente");
          setSelectedUserId(null);
          setpendingModal(false);
        }}
        onCancel={() => {
          setSelectedUserId(null);
          setpendingModal(false);
        }}
      />
      <br />
      <h1 className={style.title}>
        Estado de postulados para progama de voluntarios
      </h1>
      <br />

      <br />
      <p className={style.text}>Descargar reporte complete en excel:</p>
      <DownloadReportButton className={style.report} />
      <br />
      <br />
      <br />
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th className={style.firstRow}>#</th>
            <th className={style.firstRow}>Nombre/s</th>
            <th className={style.firstRow}>Apellido/s</th>
            <th className={style.firstRow}>Estado del proceso</th>
            <th className={style.firstRow}>Acción</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((userStatus, index) => (
            <React.Fragment key={userStatus._id}>
              <tr
                className={`${style.row} ${
                  userStatus.status === "aprobado"
                    ? style.approved
                    : userStatus.status === "denegado"
                    ? style.denied
                    : selectedUserId === userStatus._id
                    ? style.selected
                    : ""
                }`}
                onClick={() =>
                  setSelectedUserId(
                    selectedUserId === userStatus._id ? null : userStatus._id
                  )
                }
              >
                <td>{index + 1}</td>
                <td>{userStatus.name}</td>
                <td>{userStatus.lastName}</td>
                <td className={style.action}>{userStatus.status}</td>
                <td className={style.action}>
                  {userStatus.status === "pendiente" && (
                    <>
                      <Button
                        variant="success"
                        onClick={() =>
                          handleStatusChange(userStatus._id, "aprobado")
                        }
                        className={style.btn}
                      >
                        Aprobar
                      </Button>{" "}
                      <Button
                        variant="warning"
                        onClick={() =>
                          handleStatusChange(userStatus._id, "pendiente")
                        }
                        className={style.btn}
                      >
                        Pendiente
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() =>
                          handleStatusChange(userStatus._id, "denegado")
                        }
                        className={style.btn}
                      >
                        Denegar
                      </Button>
                    </>
                  )}
                  {userStatus.status === "aprobado" && (
                    <Button
                      variant="warning"
                      onClick={() =>
                        handleStatusChange(userStatus._id, "pendiente")
                      }
                      className={style.btn}
                    >
                      Pendiente
                    </Button>
                  )}
                  {userStatus.status === "denegado" && (
                    <Button
                      variant="warning"
                      onClick={() =>
                        handleStatusChange(userStatus._id, "pendiente")
                      }
                      className={style.btn}
                    >
                      Pendiente
                    </Button>
                  )}
                </td>
              </tr>
              {selectedUserId === userStatus._id && (
                <tr
                  className={
                    userStatus.status === "denegado"
                      ? style.deniedRow
                      : userStatus.status === "aprobado"
                      ? style.approvedRow
                      : style.expandRow
                  }
                >
                  <td colSpan="4">
                    <div className={style.expandContent}>
                      <table style={{ textAlign: "left" }}>
                        <tbody>
                          <tr>
                            <td>Fecha de nacimiento:</td>
                            <td>{userStatus.birthDate}</td>
                          </tr>
                          <tr>
                            <td>Género:</td>
                            <td>{userStatus.genre}</td>
                          </tr>
                          <tr>
                            <td>Nacionalidad:</td>
                            <td>{userStatus.nationality}</td>
                          </tr>
                          <tr>
                            <td>Provincia:</td>
                            <td>{userStatus.province}</td>
                          </tr>
                          <tr>
                            <td>Localidad:</td>
                            <td>{userStatus.location}</td>
                          </tr>
                          <tr>
                            <td>Dirección:</td>
                            <td>{userStatus.address}</td>
                          </tr>
                          <tr>
                            <td>Número de documento:</td>
                            <td>{userStatus.document}</td>
                          </tr>
                          <tr>
                            <td>Documento adjunto:</td>
                            <td>
                              <DownloadPDFButton
                                documentType="adjDocument"
                                userId={userStatus.document}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>CV adjunto:</td>
                            <td>
                              <DownloadPDFButton
                                documentType="CV"
                                userId={userStatus.document}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Teléfono celular:</td>
                            <td>{userStatus.phone}</td>
                          </tr>
                          <tr>
                            <td>Estudios:</td>
                            <td>{userStatus.schooling}</td>
                          </tr>
                          <tr>
                            <td>Profesión:</td>
                            <td>{userStatus.profession}</td>
                          </tr>
                          <tr>
                            <td>Email:</td>
                            <td>{userStatus.email}</td>
                          </tr>
                          <tr>
                            <td>¿Cómo conociste a Grooming Argentina?</td>
                            <td>{userStatus.howKnowGrooming}</td>
                          </tr>
                          <tr>
                            <td>Perfil de Facebook:</td>
                            <td>
                              <a
                                href={userStatus.facebook}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {userStatus.facebook}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Perfil de Twitter:</td>
                            <td>
                              <a
                                href={userStatus.twitter}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {userStatus.twitter}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Perfil de Instagram:</td>
                            <td>
                              <a
                                href={userStatus.instagram}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {userStatus.instagram}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Perfil de LinkedIn:</td>
                            <td>
                              <a
                                href={userStatus.linkedIn}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {userStatus.twitter}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              ¿Cuántas horas semanales podrías dedicarle al
                              voluntariado?
                            </td>
                            <td>{userStatus.howManyHours}</td>
                          </tr>
                          <tr>
                            <td>¿Cómo definirías el grooming?</td>
                            <td>{userStatus.opinion}</td>
                          </tr>
                          <tr>
                            <td>
                              ¿Conocés a alguien dentro de Grooming Argentina?
                            </td>
                            <td>{userStatus.knowGroominPerson}</td>
                          </tr>
                          <tr>
                            <td>
                              Si tu respuesta anterior fue Si, contanos a quién
                              conocés.
                            </td>
                            <td>{userStatus.whoGroominPerson}</td>
                          </tr>
                          <tr>
                            <td>
                              ¿Por qué te gustaría ser voluntario/a de Grooming
                              Argentina?
                            </td>
                            <td>{userStatus.whyGroomin}</td>
                          </tr>
                          <tr>
                            <td>¿Cuál es tu interés en la temática?</td>
                            <td>{userStatus.theme}</td>
                          </tr>
                          <tr>
                            <td>
                              ¿Cuáles son tus expectativas dentro de la ONG?
                            </td>
                            <td>{userStatus.expectations}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>

      <div className={style.selectEntriesContainer} style={{ width: "12%" }}>
        <Form.Select
          value={limit}
          onChange={(e) => handleLimitChange(parseInt(e.target.value))}
          className={style.selectEntries}
        >
          <option value={10}>10 por página</option>
          <option value={20}>20 por página</option>
          <option value={30}>30 por página</option>
          <option value={50}>50 por página</option>
          <option value={100}>100 por página</option>
          <option value={99999999}>Mostrar todos</option>
        </Form.Select>
      </div>

      <div className={style.paginationContainer}>
        {filteredList.length > 0 && (
          <Paginations
            page={page}
            pageCount={pageCount}
            handlePageChange={handlePageChange}
            className={style.pagination}
          />
        )}
      </div>
    </div>
  );
};

export default ManageVolunteers;
