import React from 'react'
import Title from '../Title'
import { TESTIMONIALS } from '@/constants/testimony'
import TestimonialCard from '../Cards/TestimonialCard'

const Testimonials = () => {
  return (
    <section className="mb-20"
>
        <Title label="Testimonials"/>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10  p-6 '>
          {
          TESTIMONIALS.map((testimony, index)=>{
              const {name,message,image,title}=testimony
              return(
                <TestimonialCard key={index} name={name} title={title} message={message} image={image}/>
              )
            })
          }

        </div>
      
    </section>
  )
}

export default Testimonials
