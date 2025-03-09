import React from 'react'
import "./style.css"

export default function page() {
    return (
        <div className='page'>

            {/* <h3 className="page_heading">NEWS</h3> */}

            <div className="news">

                <div className="image">
                    <img src="/assets/sample_news.jpg" alt="" />
                </div>

                <div className="details">

                    <h3 className="headline">THIS IS A NEWS</h3>

                    <p className="news_content">
                        Lorem ipsum dolo
                        r sit amet consectetur adipisicing elit. Quas facere nihil corrupti possimus unde rem a earum recusandae, cum optio expedita fugit iusto, quasi doloribus labore consectetur eaque sint? Et, nam accusamus eum, voluptatem error facere ex soluta, magni repellendus modi hic impedit voluptatum laudantium dicta laboriosam reiciendis tempora doloremque. Lorem ipsum dolor sit amet.0
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nisi tempora at sapiente, tempore veritatis hic fugiat aperiam doloribus repellendus sit illo cum ad deserunt nam molestiae dolores expedita architecto magni. Repellendus sed vero nihil magnam soluta, labore doloribus laborum rerum modi totam ducimus officia ratione voluptatibus accusantium, veniam culpa.
                    </p>

                </div>

            </div>



        </div>
    )
}
