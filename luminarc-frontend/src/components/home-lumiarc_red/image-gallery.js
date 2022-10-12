import React from 'react'

import './styles.css'

function ImageGallery() {
    return (
        <div>
            <div className='margin'>
                <section class="cards">
                    <article>
                       
                            <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" width="300px" />
                            <div class="article-title">
                           Luminarc Red
                         </div>
                       
                    </article>
                    <article>
                        <img class="article-img" src="https://www.thegoldencrownhotel.com/images/site-specific/golden_crown/accomodation/premier-suite.jpg" alt=" " />
                        <div class="article-title">
                        Luminarc Red
                         </div>
                    </article>
                    <article>
                        <img class="article-img" src="https://lh6.googleusercontent.com/LAbDs9JrwGjxAAQoHT1lNnKt4a5_OXDqw7S3hZQajGS30XvPwjynPOA8-afixA6QqxL_g7iPn12dRWTO40GhEyPS7n7CDzRYg61Ib334yCK6ZIPjLNZbZExrLk_8BPvf83fq1Qte" alt=" " />
                        <div class="article-title">
                        Luminarc Red
                         </div>
                    </article>
                   
                  
                </section>
            </div>
        </div>
    )
}

export default ImageGallery
