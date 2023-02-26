import React from 'react'
import BookList from '../../BookList';
import { ItemCont } from "../Items";
import { Outlet } from 'react-router-dom';
function AllBooks() {
  return (
    <ItemCont className="col-10 itemCont">
      <BookList />
      <Outlet/>
    </ItemCont>
  )
}

export default AllBooks
