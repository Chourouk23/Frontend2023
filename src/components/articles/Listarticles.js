
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getArticlesPages } from "../../features/articleSlice";
import Affichearticles from "./Affichearticles";
const Listarticles = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const dispatch = useDispatch()
  const listproduits = useCallback(() => {
    const mesParams = {
      currentPage: currentPage,
      itemsPerPage: itemsPerPage
    };
    dispatch(getArticlesPages(mesParams))
  }, [currentPage])
  useEffect(() => {
    listproduits()
  }, [listproduits])

  return (
    <div>
      <Affichearticles currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} />
    </div>
  )
}

export default Listarticles
