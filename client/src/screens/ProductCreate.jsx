import { useState } from 'react'

import Footer from '../components/Footer'
import { Redirect } from 'react-router-dom'
import { createProduct } from '../services/products'

const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    imgURL: '',
    price: '',
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createProduct(product)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/products`} />
  }
  return (
    <>
      <form className='flex space-y-6 flex-col border-8 border-black-100 ml-72 mr-72 mb-52 bg-green-500' onSubmit={handleSubmit}>
        <input
          className='flex flex-col ml-40 mr-40 mt-5 bg-green-200'
          placeholder='title'
          value={product.title}
          name='title'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className='flex flex-col ml-40 mr-40 mt-5 bg-green-200'
          placeholder='Image Link'
          value={product.imgURL}
          name='imgURL'
          required
          onChange={handleChange}
        />
        <input
          className='flex flex-col ml-40 mr-40 mt-5 bg-green-200'
          placeholder='Price'
          value={product.price}
          name='price'
          required
          onChange={handleChange}
        />
        <textarea
          className='flex flex-col ml-40 mr-40 mt-5 bg-green-200'
          rows={10}
          placeholder='Description'
          value={product.description}
          name='description'
          required
          onChange={handleChange}
        />
        <button type='submit' className='edit-button mb-5 '>
          Submit
        </button>
      </form>
      <Footer />
    </>
  )
}

export default ProductCreate
