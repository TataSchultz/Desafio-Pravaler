import { useState, useEffect } from "react";
import {
  getInstituicoes,
  getCampus,
  getCursos,
  getEstados,
} from "../Api/fetchData";

const ListarDados = () => {
  const [curso, setCurso] = useState([]);
  const [instituicao, setInstituicao] = useState([]);
  const [campus, setCampus] = useState([]);
  const [estado, setEstado] = useState([]);

  useEffect(() => {
    getCursos().then((data) => setCurso(data?.courses || []));
    getInstituicoes().then((data) => setInstituicao(data?.institutions || []));
    getCampus().then((data) => setCampus(data?.campus || []));
    getEstados().then((data) => setEstado(data?.states || []));
  }, []);

  return { instituicao, campus, curso, estado };
};

export default ListarDados;
