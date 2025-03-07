function Pessoa({nome, idade, curso, foto}){
    return (
    <div>
        <h2>Nome :{nome}</h2>
        <img src = {foto} alt = {nome} />
        <p>Idade:{idade} anos</p>
        <p>Curso:{curso}</p>
    </div>
    )
}
export default Pessoa