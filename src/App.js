import { useState } from "react";
import "./App.css";
import MyForm from "./component/MyForm";
import MyBookList from "./component/MyBookList";
import { connect } from "react-redux";

function App({ allBookList }) {
  const [editableId, setEditableId] = useState(null);
  const [isShowable, setIsShowable] = useState(false);

  const onClickEditButton = (editId) => {
    setEditableId(editId);
    setIsShowable(true);
  };

  const editableObject =
    allBookList.filter((f) => f?.bookId == editableId)[0] || {};

  return (
    <>
      <h2>Online Book Library</h2>
      <button
        onClick={() => {
          setIsShowable(true);
          setEditableId(null);
        }}
      >
        Add Book
      </button>
      <div className="row">
        <div className="col-sm-6">
          <MyBookList
            onClickEditButton={onClickEditButton}
            setIsShowable={setIsShowable}
          />
        </div>
        <div className="col-sm-6">
          {isShowable && (
            <MyForm
              editableObject={editableObject}
              isShowable={isShowable}
              setIsShowable={setIsShowable}
            />
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    allBookList: state.BookDetails.bookDetails,
  };
};

export default connect(mapStateToProps)(App);
