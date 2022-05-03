import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import Header from "../components/Header"
import Categories from "../components/Categories"
import SliderBanner from "../components/SliderBanner"
import ProductsList from "../components/ProductsList"
import Nav from "../components/Nav"


function Home() {
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    setLoading(false)
  }, [])

  if (loading === true) {
      return <Loading />
  }

  return (
    <>
      <Header />
      <div className="contain-body">
        <Categories />
        <SliderBanner />
        <ProductsList />
        <Nav />
      </div>
    </>
  )
}

export default Home
