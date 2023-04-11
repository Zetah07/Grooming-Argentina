import Table from 'react-bootstrap/Table';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getAllNews,
  resetFilter,
  resetPagination,
} from '../../../Redux/Actions/index';
import PaginationNewsBlogs from '../PaginationNewsBlogs/PaginationNewsBlogs';
import axios from '../../../api/axios';
import useAuth from '../../../hooks/useAuth';
import showAlert from '../../ShowAlert/ShowAlert';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import style from './ManageNews.module.css';

const ManageNews = () => {
  const dispatch = useDispatch();
  const { auth } = useAuth();
  const newspaper = useSelector((state) => state.news);
  const filter = useSelector((state) => state.filter);
  const pagination = useSelector((state) => state.pagination);
  const newsPerPage = 6;
  const pageNumberLimit = 5;
  const [deleteModal, setDeleteModal] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  if (
    newspaper.docs &&
    newspaper.docs.length > 0 &&
    items &&
    items.length === 0
  )
    setItems([...newspaper.docs]);

  useEffect(() => {
    dispatch(getAllNews(currentPage + 1, newsPerPage));
    dispatch(resetPagination());
  }, [dispatch, currentPage, newsPerPage]);

  useEffect(() => {
    if (pagination === true) {
      setItems([...newspaper.docs]);
      dispatch(resetPagination());
    }
  }, [dispatch, pagination, newspaper.docs]);

  useEffect(() => {
    if (filter === true) {
      setCurrentPage(0);
      setmaxPageNumberLimit(5);
      setminPageNumberLimit(0);
      setItems([...newspaper.docs]);
      dispatch(resetFilter());
    }
  }, [dispatch, filter, newspaper]);

  const firstHandler = (firstPage) => {
    setCurrentPage(firstPage);
    setminPageNumberLimit(0);
    setmaxPageNumberLimit(5);
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    setCurrentPage(prevPage);
    if (currentPage % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const nextHandler = () => {
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * newsPerPage;
    if (firstIndex > newspaper.totalDocs) return;
    setCurrentPage(nextPage);
    if (currentPage + 2 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const lastHandler = (lastPage) => {
    setCurrentPage(lastPage);
    setmaxPageNumberLimit(5 * Math.ceil(lastPage / 5));
    setminPageNumberLimit(5 * Math.floor(lastPage / 5));
  };

  const pages = (numberPage) => {
    setCurrentPage(numberPage);
  };

  const deleteHandler = async (id) => {
    await axios
      .delete(`/news/${id}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          showAlert('Se eliminó la noticia', 'green');
        }
      })
      .catch((error) => {
        console.log(error);
        showAlert('No se pudo eliminar la noticia', 'red');
      });
  };

  const handleStatusDelete = async (id) => {
    try {
      setSelectedBlogId(id);
      setDeleteModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className={style.container}>
      <ConfirmationModal
        show={deleteModal}
        title='Eliminar'
        message='¿Está seguro que desea eliminar la noticia?'
        onConfirm={async () => {
          await deleteHandler(selectedBlogId);
          dispatch(getAllNews(currentPage + 1, newsPerPage));
          setDeleteModal(false);
        }}
        onCancel={() => {
          setDeleteModal(false);
        }}
      />
      <br />
      <h1 className={style.title}>Panel de Noticias</h1>
      <br />
      <Table striped bordered hover responsive='xl'>
        <thead>
          <tr className={style.rowTitle}>
            <th>Imagen</th>
            <th>Titulo</th>
            <th>Categoria</th>
            <th>Provincia</th>
            <th>Creado</th>
            <th>Actualizado</th>
            <th>Modificar noticia</th>
            <th>Eliminar noticia</th>
          </tr>
        </thead>
        <tbody>
          {items.map((paper) => {
            return (
              <tr
                key={paper._id}
                className={style.table}
                style={{ textAlign: 'center' }}
              >
                <td>
                  <img
                    src={paper.img.url}
                    alt='newsImage'
                    className={style.img}
                  />
                </td>
                <td>
                  <p className={style.text}>{paper.title.toLowerCase()}</p>
                </td>
                <td style={{ fontSize: '20px' }}>{paper.category}</td>
                <td style={{ fontSize: '20px' }}>{paper.provinceOrLocation}</td>
                <td
                  style={{
                    fontSize: '20px',
                    textAlign: 'center',
                    alignItems: 'center',
                  }}
                >
                  {new Date(paper.createdAt).toLocaleString('es-US', {
                    timeZone: 'America/Argentina/Buenos_Aires',
                  })}
                </td>
                <td style={{ fontSize: '20px', textAlign: 'center' }}>
                  {new Date(paper.updatedAt).toLocaleString('es-US', {
                    timeZone: 'America/Argentina/Buenos_Aires',
                  })}
                </td>
                <td>
                  <Button
                    href={`noticias/${paper._id}`}
                    className={style.btn}
                    style={{ backgroundColor: '#004b82' }}
                  >
                    Modificar
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => handleStatusDelete(paper._id)}
                    variant='danger'
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className={style.pagination}>
        <PaginationNewsBlogs
          totalItems={newspaper.totalDocs}
          totalPages={newspaper.totalPages}
          firstHandler={firstHandler}
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          lastHandler={lastHandler}
          pages={pages}
          itemsPerPage={newsPerPage}
          currentPage={currentPage}
          pageNumberLimit={pageNumberLimit}
          maxPageNumberLimit={maxPageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
        />
      </div>
    </Container>
  );
};
export default ManageNews;
