import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function ChannelingHome() {
    return(
        <div>
        <h1>ChannelingHome</h1>
    <Carousel autoPlay={true}>
        <div>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>

        </div>
    );
}