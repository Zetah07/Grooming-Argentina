import React from 'react'
import { Link } from 'react-router-dom'
// import s from 'Footer.module.scss'

const Footer = () => {
  return (
    <div ClassName="mt-5 pt-5 pb-5 footer">
      <div ClassName="container">
        <div ClassName="row">
          <div ClassName="col-lg-5 col-xs-12 about-company">
            <h2>Heading</h2>
            <p ClassName="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
            <p><Link to='/' /><i ClassName="fa fa-facebook-square mr-1"></i> <Link /><Link to='/' /><i ClassName="fa fa-linkedin-square"></i><Link /></p>
            <div ClassName="col-lg-3 col-xs-12 links">
              <h4 ClassName="mt-lg-0 mt-sm-3">Links</h4>
              <ul ClassName="m-0 p-0">
                <li>- <Link to='/' />Lorem ipsum<Link /></li>
                <li>- <Link to='/' />Nam mauris velit<Link /></li>
                <li>- <Link to='/' />Etiam vitae mauris<Link /></li>
                <li>- <Link to='/' />Fusce scelerisque<Link /></li>
                <li>- <Link to='/' />Sed faucibus<Link /></li>
                <li>- <Link to='/' />Mauris efficitur nulla<Link /></li>
              </ul>
            </div>
            <div ClassName="col-lg-4 col-xs-12 location">
              <h4 ClassName="mt-lg-0 mt-sm-4">Location</h4>
              <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
              <p ClassName="mb-0"><i ClassName="fa fa-phone mr-3"></i>(541) 754-3010</p>
              <p><i ClassName="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
            </div>
          </div>
          <div ClassName="row mt-5">
            <div ClassName="col copyright">
              <p ClassName=""><small ClassName="text-white-50">© 2019. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer