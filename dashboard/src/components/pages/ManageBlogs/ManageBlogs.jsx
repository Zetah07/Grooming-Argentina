import Table from "react-bootstrap/Table";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllBlogs,
  resetFilter,
  resetPagination,
} from "../../../Redux/Actions/index";
import PaginationNewsBlogs from "../PaginationNewsBlogs/PaginationNewsBlogs";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import showAlert from "../../ShowAlert/ShowAlert";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import style from "./ManageBlogs.module.css";

const ManageBlogs = () => {
  const dispatch = useDispatch();
  const { auth } = useAuth();
  const blogs = useSelector((state) => state.blogs);
  const filter = useSelector((state) => state.filter);
  const pagination = useSelector((state) => state.pagination);
  const blogsPerPage = 5;
  const pageNumberLimit = 5;
  const [deleteModal, setDeleteModal] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  if (blogs.docs && blogs.docs.length > 0 && items && items.length === 0)
    setItems([...blogs.docs]);

  useEffect(() => {
    dispatch(getAllBlogs(currentPage + 1, blogsPerPage));
    dispatch(resetPagination());
  }, [dispatch, currentPage, blogsPerPage]);

  useEffect(() => {
    if (pagination === true) {
      setItems([...blogs.docs]);
      dispatch(resetPagination());
    }
  }, [dispatch, pagination, blogs.docs]);

  useEffect(() => {
    if (filter === true) {
      setCurrentPage(0);
      setmaxPageNumberLimit(5);
      setminPageNumberLimit(0);
      setItems([...blogs.docs]);
      dispatch(resetFilter());
    }
  }, [dispatch, filter, blogs]);

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
    const firstIndex = nextPage * blogsPerPage;
    if (firstIndex > blogs.totalDocs) return;
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
      .delete(`/blog/${id}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          showAlert("Se eliminó el blog", "green");
        }
      })
      .catch((error) => {
        console.log(error);
        showAlert("No se pudo eliminar el blog", "red");
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
        title="Eliminar"
        message="¿Está seguro que desea eliminar el blog del usuario?"
        onConfirm={async () => {
          await deleteHandler(selectedBlogId);
          dispatch(getAllBlogs(currentPage + 1, blogsPerPage));
          setDeleteModal(false);
        }}
        onCancel={() => {
          setDeleteModal(false);
        }}
      />
      <Button variant="primary" href="/panel/crearblog">
        Crear Blog
      </Button>
      <Table striped bordered hover responsive="xl">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Subtitulo</th>
            <th>Autor</th>
            <th>Creado</th>
            <th>Actualizado</th>
            <th>Modificar Blog</th>
            <th>Eliminar Blog</th>
          </tr>
        </thead>
        <tbody>
          {items.map((blog) => {
            return (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>{blog.subtitle}</td>
                <td>{blog.author}</td>
                <td>{blog.createdAt}</td>
                <td>{blog.updatedAt}</td>
                <td>
                  <Button href={`blogs/${blog._id}`} variant="primary">
                    Modificar
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => handleStatusDelete(blog._id)}
                    variant="danger"
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div>
        <PaginationNewsBlogs
          totalItems={blogs.totalDocs}
          totalPages={blogs.totalPages}
          firstHandler={firstHandler}
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          lastHandler={lastHandler}
          pages={pages}
          itemsPerPage={blogsPerPage}
          currentPage={currentPage}
          pageNumberLimit={pageNumberLimit}
          maxPageNumberLimit={maxPageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
        />
      </div>
    </Container>
  );
};
export default ManageBlogs;
