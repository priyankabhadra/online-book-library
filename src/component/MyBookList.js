import React, { useState } from "react";
import { deleteBook } from "../action/index";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";


const MyBookList = ({ onClickEditButton, setIsShowable }) => {
  const dispatch = useDispatch("");
  const[isSearch, setIsSearch] = useState('');

  const allBookList = useSelector((state) => state.BookDetails.bookDetails);

  const onClickDeleteButton = (bookId) => {
    setIsShowable(false);
    dispatch(deleteBook(bookId));
  };

  
  const filterItems = allBookList.filter((value) => value.bookAuthor.toLowerCase().includes(isSearch.toLowerCase()) || value.bookName.toLowerCase().includes(isSearch.toLowerCase()));

  return (
    <>
      <h3 className={"App"}>List Book Details</h3>
      <input type="text" placeholder="search" onChange={(e) => setIsSearch(e.target.value)}/>
      {filterItems.map((x) => (
        <p key={x.bookId}>
          <h3>{x.bookName}</h3>
          <h2>{x.bookAuthor}</h2>
          <p>{x.bookDescription}</p>
          <button onClick={() => onClickDeleteButton(x.bookId)}>Delete</button>
          <button onClick={() => onClickEditButton(x.bookId)}>Edit</button>
          <hr />
        </p>
      ))}
    </>
  );
};

export default MyBookList;
