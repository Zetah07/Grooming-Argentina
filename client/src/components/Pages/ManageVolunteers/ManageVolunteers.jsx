import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "../../../api/axios";
import style from "./ManageVolunteers.module.css";
import DownloadReportButton from "../../downloadButton/downloadReportButton";
import useAuth from "../../../hooks/useAuth";
import DownloadPDFButton from "../../downloadAdjDocuments/DownloadAdjDocuments";

const ManageVolunteers = () => {
  const [userStatusList, setUserStatusList] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { auth } = useAuth();
  useEffect(() => {
    const fetchUserStatusList = async () => {
      const response = await axios.get("/userstatus", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      });
      setUserStatusList(response.data);
    };
    fetchUserStatusList();
  }, [auth?.accessToken]);

  const handleStatusChange = async (id, newStatus) => {
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

    const updatedList = userStatusList.map((userStatus) =>
      userStatus._id === id ? { ...userStatus, status: newStatus } : userStatus
    );
    setUserStatusList(updatedList);
    setSelectedUserId(null);
  };

  const approvedUsers = userStatusList.filter(
    (userStatus) => userStatus.status === "approved"
  );
  const pendingUsers = userStatusList.filter(
    (userStatus) => userStatus.status === "pending"
  );
  const deniedUsers = userStatusList.filter(
    (userStatus) => userStatus.status === "denied"
  );
  const sortedUserStatusList = approvedUsers.concat(pendingUsers, deniedUsers);

  return (
    <div className="container">
      <br />
      <br />
      <h1 className={style.title}>
        Estado de postulados para progama de voluntarios
      </h1>
      <br />
      <p className={style.text}>Descargar reporte complete en excel:</p>
      <DownloadReportButton />
      <br />
      <br />
      <br />
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th className={style.firstRow}>Nombre/s</th>
            <th className={style.firstRow}>Apellido/s</th>
            <th className={style.firstRow}>Estado del proceso</th>
            <th className={style.firstRow}>Acción</th>
          </tr>
        </thead>
        <tbody>
          {sortedUserStatusList.map((userStatus) => (
            <React.Fragment key={userStatus._id}>
              <tr
                className={`${style.row} ${
                  userStatus.status === "approved"
                    ? style.approved
                    : userStatus.status === "denied"
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
                <td>{userStatus.name}</td>
                <td>{userStatus.lastName}</td>
                <td className={style.action}>{userStatus.status}</td>
                <td className={style.action}>
                  {userStatus.status === "pending" && (
                    <>
                      <Button
                        variant="success"
                        onClick={() =>
                          handleStatusChange(userStatus._id, "approved")
                        }
                        className={style.btn}
                      >
                        Aprobar
                      </Button>{" "}
                      <Button
                        variant="warning"
                        onClick={() =>
                          handleStatusChange(userStatus._id, "pending")
                        }
                        className={style.btn}
                      >
                        Pendiente
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() =>
                          handleStatusChange(userStatus._id, "denied")
                        }
                        className={style.btn}
                      >
                        Denegar
                      </Button>
                    </>
                  )}
                  {userStatus.status === "approved" && (
                    <Button
                      variant="warning"
                      onClick={() =>
                        handleStatusChange(userStatus._id, "pending")
                      }
                      className={style.btn}
                    >
                      Pendiente
                    </Button>
                  )}
                  {userStatus.status === "denied" && (
                    <Button
                      variant="warning"
                      onClick={() =>
                        handleStatusChange(userStatus._id, "pending")
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
                    userStatus.status === "denied"
                      ? style.deniedRow
                      : userStatus.status === "approved"
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
                              <p>{userStatus.adjDocument}</p>
                            </td>
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
                            <td>{userStatus.facebook}</td>
                          </tr>
                          <tr>
                            <td>Perfil de Twitter:</td>
                            <td>{userStatus.twitter}</td>
                          </tr>
                          <tr>
                            <td>Perfil de Instagram:</td>
                            <td>{userStatus.instagram}</td>
                          </tr>
                          <tr>
                            <td>Perfil de LinkedIn:</td>
                            <td>{userStatus.linkedin}</td>
                          </tr>
                          <tr>
                            <td>
                              ¿Cuántas horas semanales podrías dedicarle al
                              voluntariado?
                            </td>
                            <td>{userStatus.howManyHours}</td>
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
    </div>
  );
};

export default ManageVolunteers;
