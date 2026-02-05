import React from "react"
import Heading from "../../common/Heading"
import "./Price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='Choose a plan that fits your needs with transparent pricing and no hidden charges.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price