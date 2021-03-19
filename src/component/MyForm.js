import React from "react";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addBook, editBook } from "../action/index";

const MyForm = ({ editableObject, isShowable, setIsShowable }) => {
  const dispatch = useDispatch("");
  const [bookName, setBookName] = useState(editableObject?.bookName || "");
  const [bookAuthor, setBookAuthor] = useState(editableObject?.bookAuthor || "");
  const [bookDescription, setBookDescription] = useState(editableObject?.bookDescription || "");
  const [bookCount, setBookCount] = useState(editableObject?.bookCount || 0);
  const [bookId, setBookId] = useState(editableObject?.bookId || 0);

  useEffect(() => {
    setBookName(editableObject?.bookName || "");
    setBookAuthor(editableObject?.bookAuthor || "");
    setBookDescription(editableObject?.bookDescription || "");
    setBookCount(editableObject?.bookCount || "");
    setBookId(editableObject?.bookId || "");
  }, [editableObject])

  const bName = useRef("");
  const bAuthor = useRef("");
  const bDescription = useRef("");
  const bCount = useRef("");
  const bId = useRef("");
  const Submit = useRef("");

  useEffect(() => {
    bName.current.focus();
  }, []);

  const onEnterPressOnBooktName = (e) => {
    if (e.key == "Enter") {
      bAuthor.current.focus();
    }
  };

  const onEnterPressOnBooktAuthor = (e) => {
    if (e.key == "Enter") {
      bDescription.current.focus();
    }
  };

  const onEnterPressOnBookDescription = (e) => {
    if (e.key == "Enter") {
      bCount.current.focus();
    }
  };

  const onEnterPressOnBookCount = (e) => {
    if (e.key == "Enter") {
      bId.current.focus();
    }
  };

  const onEnterPressOnBookID = (e) => {
    if (e.key == "Enter") {
      Submit.current.focus();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const addBookDetails = {
      bookName,
      bookAuthor,
      bookDescription,
      bookCount,
      bookId,
    };

    if (editableObject?.bookName) {
        dispatch(editBook(addBookDetails));
    } else {
        dispatch(addBook(addBookDetails));
    }
    setIsShowable(false);
  };

  const onCancel = (e) => {
    e.preventDefault();
    setIsShowable(false);
  }

  return (
    <>
      {isShowable ? (
        <div>
          {/* {" "} */}
          <label>bookName :</label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            ref={bName}
            onKeyDown={onEnterPressOnBooktName}
          ></input>
          <br />
          <br />
          <label>bookAuthor :</label>
          <input
            type="text"
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
            ref={bAuthor}
            onKeyDown={onEnterPressOnBooktAuthor}
          ></input>
          <br />
          <br />
          <label>bookDescription :</label>
          <input
            type="text"
            value={bookDescription}
            onChange={(e) => setBookDescription(e.target.value)}
            ref={bDescription}
            onKeyDown={onEnterPressOnBookDescription}
          ></input>
          <br />
          <br />
          <label>bookCount :</label>
          <input
            type="number"
            value={bookCount}
            onChange={(e) => setBookCount(e.target.value)}
            ref={bCount}
            onKeyDown={onEnterPressOnBookCount}
          ></input>
          <br />
          <br />
          <label>bookId :</label>
          <input
            type="number"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            ref={bId}
            onKeyDown={onEnterPressOnBookID}
          ></input>
          <br />
          <br />
          <button type="submit" ref={Submit} onClick={onSubmit}>
            Submit
          </button>
          <button type="submit" onClick={onCancel}>
            cancel
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MyForm;
