import React from 'react'
import './home.css'

const Home = () => {
  return (
    <body className='home-body'>
      <div className='main'>
        <nav className='nav'>
          <div className='Links'>
            <a className='link' href=''>Home</a>
            <a className='link' href=''>Pages</a>
            <a className='link' href=''>Blog</a>
            <a className='link' href=''>Shop</a>
            <a className='link' href=''>Contact</a>
          </div>
          
          <div>
            <img className='logo' src="https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png" alt=''/>
          </div>

          <div className='personal-info'>
           
             <a href='/login'>Login</a>
             <a href='/signup'>Register</a>
             <a href=''>Search</a>
            
          </div>

        </nav>

        <div className='content'>
          <div className='left'>
            <a className='display-entries' href='/display'>Display Entries</a>
          </div>
          <div className='right'></div>
        </div>
        <div className='cards'>
          <div className='card-items'>
              <div className='items'>
                <img src='https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png' alt='' className='product-image'/>
                <h1 className='nameofproduct'>Black Shirt</h1>
                <h2 className='priceofproduct'>$1000</h2>
              </div>

              <div className='items'>
                <img src='https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png' alt='' className='product-image'/>
                <h1 className='nameofproduct'>Black Shirt</h1>
                <h2 className='priceofproduct'>$1000</h2>
              </div>

              <div className='items'>
                <img src='https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png' alt='' className='product-image'/>
                <h1 className='nameofproduct'>Black Shirt</h1>
                <h2 className='priceofproduct'>$1000</h2>
              </div>
          </div>
        </div>
        <div className='footer'>
          <div className='f-items'>
          <h2>Usama Developer</h2>
          <h3>@2022</h3>
          </div>
        </div>
        
      </div>
    </body>
    
  )
}

export default Home