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
            const resp = await axios.get('http://localhost:3500/products')
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
        <p className='total_products_p'>Total products: {productsData ? (String(productsData.length).padStart(2, 0)) : '--'}</p>
        <br /><br />
        <Wrapper className='blog_wrapper'>
            {productsData.length ? (
                productsData.map((value, index) => (
                    <Box className='product_box' key={index}>
                        <div className='product_img_div'>
                            <div className='product_blur_img' style={{backgroundImage: `url('http://localhost:3500/product_images/${value.product_img}')`}}></div>
                            <img src={`http://localhost:3500/product_images/${value.product_img}`}/>
                        </div>

                        <div className='product_details_div'>
                            <p className='product_name'>{value.product_name}</p>
                            <div className='product_price_div'>
                                <span>Price</span>
                                <span>{value.product_price} Birr</span>
                            </div>
                            <br />
                        </div>
                        </Box>
                ))
            ): <p>No products are available</p>}
        </Wrapper>
    </Wrapper>
  )
}

export default BlogDisplay