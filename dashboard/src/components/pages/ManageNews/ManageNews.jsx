import Table from "react-bootstrap/Table";
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getAllNews } from "../../../Redux/Actions/index";

const ManageNews = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news);
  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Categoria</th>
            <th>Provincia</th>
            <th>Creado</th>
            <th>Actualizado</th>
            <th>Modificar noticia</th>
          </tr>
        </thead>
        <tbody>
          {news.map((paper) => {
            return (
              <tr key={paper._id}>
                <td>{paper._id}</td>
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
    </div>
  );

};
export default ManageNews;
