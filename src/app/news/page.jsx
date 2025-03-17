"use client"

import React from 'react'

import { useState, useEffect } from 'react'
import "./style.css"

export default function page() {

    const [ news , setNews ] = useState([0,0,0]);

  return (
    <div className='page'>

        {/* <h3 className="page_heading">NEWS</h3> */}

        <div className="all_news">

            {
                news.map((index)=>{

                    return(
                        <div className="singleNews" key={index}>

                            <div className="news_image">
                                <img src="/assets/sample_news.jpg" alt="news image" />
                            </div>

                            <div className="news_details">
                                <h3 className="news_title">WE ARE NOW ACCREDITED BY NAAC WITH “A” GRADE</h3>
                                <p className="news_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem nemo repellendus quae dignissimos, sapiente voluptatibus beatae neque vel consequuntur!</p>

                                <div className='read_more_div'> <a href="" className="read_more">Read More</a></div>
                               
                               

                            </div>
                            


                        </div>
                    )

                })
            }


        </div>
    </div>
  )
}
