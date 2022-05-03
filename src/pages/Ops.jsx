import Header from '../components/Header'
import Nav from '../components/Nav'
import { FaTools } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Ops() {

  const navigate = useNavigate()

  return (
    <>
    <Header />
    <div>
      <section className='contain-body ops'>
        <FaTools />
        <h2>Esta página estará disponível em breve</h2>
        <button onClick={ () => navigate('/') } className="btn btn-pri">Início</button>
      </section>
      <Nav />
    </div>
    </>
  )
}

export default Ops
