import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Gallery from 'react-grid-gallery'

import Footer from '../components/Footer'
import { removeActiveHome } from '../Utils'
// import Gallery from '../components/Gallery'

const text_content_lead = {
  minHeight: '500px',
  color: 'rgb(35, 35, 35)',
  backgroundColor: 'white',
  textAlign: 'center',
  padding: '25px',
  textAlign: 'justify'
}
const text_content_lead_header = {
    borderBottom: '1px solid #b5b5b5'
}
const portfolio_vid_row_style = {
    padding: '7px 7px 0px 7px'
}

const images =
[{
        src: "http://i.imgur.com/QPLiSkq.jpg",
        thumbnail: "http://i.imgur.com/QPLiSkq.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 300,
        // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        // caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "http://i.imgur.com/K64NDEu.jpg",
        thumbnail: "http://i.imgur.com/K64NDEu.jpg",
        thumbnailWidth: 520,
        thumbnailHeight: 350
},

{
        src: "http://i.imgur.com/OPqiQQ1.jpg",
        thumbnail: "http://i.imgur.com/OPqiQQ1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "http://i.imgur.com/Br44HJv.jpg",
        thumbnail: "http://i.imgur.com/Br44HJv.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "http://i.imgur.com/KfS19ts.png",
        thumbnail: "http://i.imgur.com/KfS19ts.png",
        thumbnailWidth: 320,
        thumbnailHeight: 250
},
{
        src: "http://i.imgur.com/i41nAqF.jpg",
        thumbnail: "http://i.imgur.com/i41nAqF.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 212
},
{
        src: "http://i.imgur.com/nJ5XbuS.png",
        thumbnail: "http://i.imgur.com/nJ5XbuS.png",
        thumbnailWidth: 350,
        thumbnailHeight: 230
},
{
        src: "http://i.imgur.com/PzNYmGy.jpg",
        thumbnail: "http://i.imgur.com/PzNYmGy.jpg",
        thumbnailWidth: 350,
        thumbnailHeight: 230
},
{
        src: "http://i.imgur.com/nA0hVAR.jpg",
        thumbnail: "http://i.imgur.com/nA0hVAR.jpg",
        thumbnailWidth: 350,
        thumbnailHeight: 230
}
]
// http://unitegallery.net/
// use this for gallery
class Portfolio extends Component {
    componentDidMount() {
        // hack to clean up the active class on home nav link
        // for some reason it is always active when link_to = /
        removeActiveHome()
        
        setTimeout(() => { 
            let tiles = document.getElementsByClassName('tile')
            for (let i = tiles.length-1; i >= 0; i--) {
                tiles[i].setAttribute('style', tiles[i].getAttribute('style') + 'max-width: 500px;')
            }
        }, 1)
        
        const script = document.createElement("script");
        const magnific_code = `
          $('#play-vid1')
            .magnificPopup({
                items: [{
                  src: 'https://www.youtube.com/watch?v=TVlD3Elr79c'
                }],
                type:'iframe'
              });
          $('#play-vid2')
            .magnificPopup({
                items: [{
                  src: 'https://vimeo.com/157372560'
                }],
                type:'iframe'
              });
          $('#play-vid3')
            .magnificPopup({
                items: [{
                  src: 'https://www.dropbox.com/s/hjd3ksz5tshdhlb/Nike%20-%20Unlimited%20You.mp4?raw=1'
                }],
                type:'iframe'
              });`;
            
        script.type = 'text/javascript';
        script.text = magnific_code;
    
        document.body.appendChild(script);
    }
    
    render() {
        
        return  <div>
                  <div className="portfolio-bgimg-1">
              			<div className="caption">
              				<span className="border"></span>
              			</div>
              		</div>
              
              		<div style={ text_content_lead }>
              		    <Grid>
              		        <Row >
              		            <Col xs>
              		                <h3 style= { text_content_lead_header }>Portfolio</h3>
              		            </Col>
              		        </Row>
              		        <Row >
              		            <Col xs>
              		                <Gallery images={images} onClick={ this.removeGalleryFunctions }>
              		                </Gallery>
              		            </Col>
              		        </Row>
              		        <Row style={portfolio_vid_row_style}>
              		            <Col xs id='play-vid1' className='portfolio-vid-1'>
              		                <div className="col-md-4">
                                        <i className="fa fa-play-circle" aria-hidden="true"></i>
                                    </div>
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-4">
                                    </div>
              		            </Col>
              		        </Row>
              		        <Row style={portfolio_vid_row_style}>
              		            <Col xs id='play-vid2' className='portfolio-vid-2'>
              		                <div className="col-md-4">
                                        <i className="fa fa-play-circle" aria-hidden="true"></i>
                                    </div>
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-4">
                                    </div>
              		            </Col>
              		            <Col xs id='play-vid3' className='portfolio-vid-3'>
              		                <div className="col-md-4">
                                        <i className="fa fa-play-circle" aria-hidden="true"></i>
                                    </div>
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-4">
                                    </div>
              		            </Col>
              		        </Row>
              		    </Grid>
              		</div>
              		
              	</div>
    } 
}

export default Portfolio