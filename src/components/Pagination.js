import React, { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../redux/actions/movieActions";

const PaginationPage = () => {
  const [pageCount, setpageCount] = useState(0);

  const dispatchGetAllMovies = useDispatch();

  const pages = useSelector((state) => state.pageCount);

  useEffect(() => {
    setpageCount(pages);
  }, [pages]);

  const handlePageClick = (data) => {
    console.log(data.selected + 1);
    dispatchGetAllMovies(getPage(data.selected + 1));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="< السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      breakClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationPage;
