import React, { Component } from 'react'
import Masonry from 'react-masonry-component'

const masonryOptions = {
    transitionDuration: 0
};

class Gallery extends Component {
    render() {
        const childElements = this.props.elements.map(function(element){
           return (
                <li className=''>
                    <img src={element.src} />
                </li>
            );
        });
        
        return (
            <Masonry
                className={''} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                {childElements}
            </Masonry>
        );
    }
    
}

export default Gallery