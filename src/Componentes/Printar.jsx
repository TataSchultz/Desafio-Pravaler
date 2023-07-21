

const CursoEscolhido = ({ curso, cursoSelecionado, onChange }) => {
    return (
      <div>
        <label htmlFor="curso">Curso:</label>
        <select id="curso" value={cursoSelecionado} onChange={onChange}>
          <option value="">Selecione um curso</option>
          {curso.map((c) => (
            <option key={c.id} value={c.nome}>
              {c.nome}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default CursoEscolhido;