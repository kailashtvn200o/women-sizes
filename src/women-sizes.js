import React, { useState } from 'react';

import Footer from './Footer';

import './sizes.css';
import Header from './Header'
export default function Womens() {


    return (
        <>
            <Header />
            <div className='page'>

                <div className='nxtxt'>Available Sizes</div>
                <div className='buttonContainer'>

                    <div className='rectangle'>

                        <div className='rectangle1'>
                            <button className='rectangletxt1'>
                                XS
                            </button>


                            <button className='rectangletxt1'>
                                S
                            </button>


                            <button className='rectangletxt1'>
                                M
                            </button>
                            <button className='rectangletxt1'>
                                L
                            </button>
                        </div>
                        <div className='rectangle2'>
                            <button className='rectangletxt1'>
                                XL
                            </button>
                            <button className='rectangletxt1'>
                                2XL
                            </button>
                            <button className='rectangletxt1'>
                                3XL
                            </button>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
} 