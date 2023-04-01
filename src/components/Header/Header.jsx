const Header = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    const searchValue = event.target[0].value;
    props.onSubmit(searchValue);
    event.target[0].value = "";
  }

  return (
    <div className="Header">
      <h1>Lista de Filmes</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pesquise por filmes" />
      </form>
    </div>
  );
};

export default Header;
