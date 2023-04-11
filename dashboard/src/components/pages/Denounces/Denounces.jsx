import React, { useEffect, useState } from 'react';
import { Table, Container, Form } from 'react-bootstrap';
import style from './Denounce.module.css';
import axios from '../../../api/axios';
import useAuth from '../../../hooks/useAuth';
import Paginations from '../ManageVolunteers/Pagination';
import DownloadDenounceButton from '../../DownloadDenounceButton/DownloadDenounceButton';

const Denounces = () => {
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [limit, setLimit] = useState(10);
  const [denounces, setDenounces] = useState([]);
  const [activeRow, setActiveRow] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchDenouncesList = async () => {
      try {
        const response = await axios.get(
          `/denounces?page=${page + 1}&limit=${limit}`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${auth?.accessToken}`,
            },
          }
        );
        setDenounces(response.data.docs);
        setPageCount(response.data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDenouncesList();
  }, [auth?.accessToken, page, limit]);

  const handleRowClick = (index) => {
    setActiveRow(index === activeRow ? null : index);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };
  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
    setPage(0);
  };

  return (
    <div>
      <br />
      <h1 className={style.title}>Denuncias</h1>
      <br />
      <Container className={style.container}>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th className={style.firstRow}>#</th>
              <th className={style.firstRow}>Fecha</th>
              <th className={style.firstRow}>Situación</th>
            </tr>
          </thead>
          <tbody>
            {denounces &&
              denounces.map((denounce, index) => (
                <React.Fragment key={denounce._id}>
                  <tr onClick={() => handleRowClick(index)}>
                    <td>{index + 1}</td>
                    <td className={style.action} style={{ fontSize: '20px' }}>
                      {new Date(denounce.createdAt).toLocaleString('es-US', {
                        timeZone: 'America/Argentina/Buenos_Aires',
                      })}
                    </td>
                    <td>{denounce.situation}</td>
                  </tr>
                  {activeRow === index && (
                    <tr>
                      <td colSpan={3}>
                        <p>
                          <span className={style.content}>Donde: </span>
                          {denounce.where}
                        </p>
                        <hr />
                        <p>
                          <span className={style.content}>Enlace: </span>
                          {denounce.link}
                        </p>
                        <hr />
                        <p>
                          <span className={style.content}>Descripción: </span>
                          {denounce.description}
                        </p>
                        <hr />
                        <p>
                          <span className={style.content}>Nombre: </span>
                          {denounce.name}
                        </p>
                        <hr />
                        <p>
                          <span className={style.content}>
                            Correo electrónico:{' '}
                          </span>
                          {denounce.email}
                        </p>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
          </tbody>
        </Table>
        <div className={style.bottomItems}>
          <div className={style.paginationContainer}>
            <Paginations
              page={page}
              pageCount={pageCount}
              handlePageChange={handlePageChange}
              className={style.pagination}
            />
          </div>

          <div className={style.selectEntriesContainer}>
            <Form.Select
              value={limit}
              onChange={(e) => handleLimitChange(parseInt(e.target.value))}
              className={style.selectEntries}
            >
              <option disabled>Registros por página</option>
              <option value={10}>10 por página</option>
              <option value={20}>20 por página</option>
              <option value={30}>30 por página</option>
              <option value={50}>50 por página</option>
              <option value={100}>100 por página</option>
              <option value={99999999}>Mostrar todos</option>
            </Form.Select>
          </div>

          <div className={style.reportDownloadContainer}>
            <div className={style.reportText}>
              <p className={style.textReport}>
                Descargar reporte complete en excel:
              </p>
            </div>
            <div className={style.reportButtonContainer}>
              <DownloadDenounceButton
                className={style.reportButton}
                style={{ backgroundColor: '#004b82' }}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Denounces;
