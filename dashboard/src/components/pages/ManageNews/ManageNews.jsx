import Table from "react-bootstrap/Table";
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getAllNews, resetFilter, resetPagination } from "../../../Redux/Actions/index";
import PaginationNewsBlogs from "../PaginationNewsBlogs/PaginationNewsBlogs"

const ManageNews = () => {
  const dispatch = useDispatch();
  const newspaper = useSelector((state) => state.news);
  const filter = useSelector((state) => state.filter);
  const pagination = useSelector((state) => state.pagination);
  const newsPerPage = 6;
  const pageNumberLimit = 5;
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  if (newspaper.docs && newspaper.docs.length > 0 && items && items.length === 0) setItems([...newspaper.docs]);

  console.log(newspaper.docs)
  useEffect(() => {
    dispatch(getAllNews(currentPage + 1, newsPerPage));
    dispatch(resetPagination());
  }, [dispatch, currentPage, newsPerPage]);

  useEffect(() => {
    if (pagination === true) {
      setItems([...newspaper.docs]);
      dispatch(resetPagination());
    }
  }, [dispatch, pagination, newspaper.docs])

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

  return (
    <div className="container">
      <Table striped bordered hover responsive="xl">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Categoria</th>
            <th>Provincia</th>
            <th>Creado</th>
            <th>Actualizado</th>
            <th>Modificar noticia</th>
          </tr>
        </thead>
        <tbody>
          {items.map((paper) => {
            return (
              <tr key={paper._id}>
                <td>{paper.title}</td>
                <td>{paper.category}</td>
                <td>{paper.provinceOrLocation}</td>
                <td>{paper.createdAt}</td>
                <td>{paper.updatedAt}</td>
                <td><Button href={`noticias/${paper._id}`} variant="primary">Modificar</Button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <div>
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
      <Button variant="primary" href="/panel/crearnoticia">
        Crear Noticia
      </Button>
    </div>
  );
};
export default ManageNews;
