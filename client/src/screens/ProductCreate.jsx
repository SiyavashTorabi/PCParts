import { useState } from 'react'


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
    const { title, value } = event.target
    setProduct({
      ...product,
      [title]: value,
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
    
      <form className='create-form' onSubmit={handleSubmit}>
        <input
          className='input-name'
          placeholder='Name'
          value={product.title}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className='input-price'
          placeholder='Price'
          value={product.price}
          name='price'
          required
          onChange={handleChange}
        />
        <textarea
          className='textarea-description'
          rows={10}
          placeholder='Description'
          value={product.description}
          name='description'
          required
          onChange={handleChange}
        />
        <input
          className='input-image-link'
          placeholder='Image Link'
          value={product.imgURL}
          name='imgURL'
          required
          onChange={handleChange}
        />
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
   
  )
}

export default ProductCreate
