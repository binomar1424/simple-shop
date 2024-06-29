import React, { useContext, useEffect, useState } from 'react'
import '../styles/BlogDisplay.css'
import './../styles/LoadingPage.css'
import { Box, Wrapper } from './tags'
import axios from 'axios';
import { format } from 'date-fns';
import { WebContext } from '../WebContext';

function BlogDisplay() {
    const [productsData, setProductsData] = useState([]);
    const {reloadData} = useContext(WebContext)

    useEffect(() => {
        async function getBlogs() {
            const resp = await axios.get('http://localhost:2400/products')
            if (resp.status == 200) {
                setProductsData(resp.data);
            }
        }
        getBlogs();
    },[reloadData]);

  return (
    <Wrapper>
        {/* <h3>Recently uploaded</h3> */}
        {/* <br /> */}
        <p className='total_products_p'>Total products: {String(productsData.length).padStart(2, 0)}</p>
        <br /><br />
        <Wrapper className='blog_wrapper'>
            {productsData.length ? (
                productsData.map((value, index) => (
                    <Box className='product_box' key={index}>
                        <div className='product_img_div'>
                            <div className='product_blur_img' style={{backgroundImage: `url('http://localhost:2400/product_images/${value.product_img1}')`}}></div>
                            <img src={`http://localhost:2400/product_images/${value.product_img1}`}/>
                        </div>

                        <div className='product_details_div'>
                            <p className='product_name'>{value.product_name}</p>
                            {/* <div className='product_quantity_div'>
                                <span>Quantity</span>
                                <span>{value.product_quantity}</span>
                            </div> */}

                            <div className='product_price_div'>
                                <span>Price</span>
                                <span>{value.product_price} Birr</span>
                            </div>
                        </div>
                        </Box>
                ))
            ): <p>No products are available</p>}
        </Wrapper>
    </Wrapper>
  )
}

export default BlogDisplay