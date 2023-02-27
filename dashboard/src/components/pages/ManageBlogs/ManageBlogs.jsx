import Table from "react-bootstrap/Table";
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getAllBlogs } from "../../../Redux/Actions/index";

const ManageBlogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs);
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Subtitulo</th>
            <th>Autor</th>
            <th>Creado</th>
            <th>Actualizado</th>
            <th>Modificar Blog</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => {
            return (
              <tr key={blog._id}>
                <td>{blog._id}</td>
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
    </div>
  );

};
export default ManageBlogs;
