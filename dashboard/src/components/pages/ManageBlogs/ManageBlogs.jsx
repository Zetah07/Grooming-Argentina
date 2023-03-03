import Table from "react-bootstrap/Table";
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getAllBlogs, resetFilter, resetPagination } from "../../../Redux/Actions/index";
import PaginationNewsBlogs from "../PaginationNewsBlogs/PaginationNewsBlogs"

const ManageBlogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs);
  const filter = useSelector((state) => state.filter);
  const pagination = useSelector((state) => state.pagination);
  const blogsPerPage = 5;
  const pageNumberLimit = 5;
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  if (blogs.docs && blogs.docs.length > 0 && items && items.length === 0) setItems([...blogs.docs]);

  useEffect(() => {
    dispatch(getAllBlogs(currentPage + 1, blogsPerPage));
    dispatch(resetPagination());
  }, [dispatch, currentPage, blogsPerPage]);

  useEffect(() => {
    if (pagination === true) {
      setItems([...blogs.docs]);
      dispatch(resetPagination());
    }
  }, [dispatch, pagination, blogs.docs])

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
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);
  return (
    <div >
      <Table striped bordered hover responsive="xl">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Subtitulo</th>
            <th>Autor</th>
            <th>Creado</th>
            <th>Actualizado</th>
            <th>Modificar Blog</th>
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
                <td><Button href={`blogs/${blog._id}`} variant="primary">Modificar</Button></td>
              </tr>
            )
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
      <Button variant="primary" href="/panel/crearblog">
        Crear Blog
      </Button>
    </div>
  );

};
export default ManageBlogs;
