import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Gallery from 'react-grid-gallery'

import Footer from '../components/Footer'
import { removeActiveHome, jacy_images, client_images, partner_images } from '../Utils'
// import Gallery from '../components/Gallery'

const text_content_lead = {
  minHeight: '550px',
  color: 'rgb(35, 35, 35)',
  backgroundColor: 'white',
  textAlign: 'center',
  padding: '25px',
  textAlign: 'justify'
}
const text_content_lead_header = {
    borderBottom: '1px solid #b5b5b5'
}
const row_style = {
    padding: '7px 7px 0px 7px'
}
const title_row_style = {
    padding: '7px 7px 6px 7px'
}
const title_col_style = {
    background: '#1F1C2C'
}
const title_content_style = {
    paddingBottom: '7px',
    paddingLeft: '7px',
    color: 'white',
    fontWeight: '600'
}


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
                  src: 'https://vimeo.com/221906910'
                }],
                type:'iframe'
              });`;
            
        script.type = 'text/javascript';
        script.text = magnific_code;
    
        document.body.appendChild(script);
    }
    
    openWindow(param) {
        if (param === 'nike') {
            window.open('http://www.nike.com/', '_blank')
        } else if (param === 'jaybird') {
            window.open('https://www.jaybirdsport.com/en-us')
        } else if (param === 'lokai') {
            window.open('https://lokai.com/')
        } else if (param === 'qoya') {
            window.open('http://www.qoya.love/')
        } else if (param === 'mikeposner') {
            window.open('http://www.mikeposner.com/')
        } else if (param === 'summit') {
            window.open('http://www.summit.co/')
        } else if (param === 'trapjumpin') {
            window.open('http://trapjumpin.com/')
        } else if (param === 'lifeisgood') {
            window.open('http://lifeisgood.com/')
        } else if (param === 'starwood') {
            window.open('http://starwoodcapital.com/')
        } else if (param === 'pilatesplatinum') {
            window.open('http://pilatesplatinum.com/')
        }   
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
              		        <Row style={ row_style }>
              		            <Col xs style={ title_col_style }>
              		                <h3 style= { title_content_style }>Portfolio</h3>
              		            </Col>
              		        </Row>
              		        <Row >
              		            <Col xs>
              		                <Gallery images={jacy_images} >
              		                </Gallery>
              		            </Col>
              		        </Row>
              		        <Row style={row_style}>
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
              		        <Row style={row_style}>
              		            <Col xs={12} md={8}id='play-vid2' className='portfolio-vid-2'>
              		                <div className="col-md-4">
                                        <i className="fa fa-play-circle" aria-hidden="true"></i>
                                    </div>
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-4">
                                    </div>
              		            </Col>
              		            <Col xs={12} md={4} id='play-vid3' className='portfolio-vid-3'>
              		                <div className="col-md-4">
                                        <i className="fa fa-play-circle" aria-hidden="true"></i>
                                    </div>
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-4">
                                    </div>
              		            </Col>
              		        </Row>
              		        {/* Client pics */}
              		        <Row style={ title_row_style }>
              		            <Col xs style={ title_col_style }>
              		                <h3 style={ title_content_style }>Clients</h3>
              		            </Col>
              		        </Row>
              		        <Row style={row_style}>
              		            <Col  xs onClick={ () => {this.openWindow('nike')} } id='portfolio-nike-img'>
              		            </Col>
              		            <Col xs onClick={ () => {this.openWindow('lifeisgood')} } id='portfolio-lifeisgood-img'>
              		            </Col>
              		            <Col xs onClick={ () => {this.openWindow('jaybird')} } id='portfolio-jaybird-img'>
              		            </Col>
              		            <Col  xs onClick={ () => {this.openWindow('summit')} } id='portfolio-summit-img'>
              		            </Col>
              		            <Col  xs onClick={ () => {this.openWindow('lokai')} } id='portfolio-lokai-img'>
              		            </Col>
              		        </Row>
              		        <Row>
              		            <Col xs onClick={ () => {this.openWindow('qoya')} } id='portfolio-qoya-img'>
              		            </Col>
              		            <Col xs onClick={ () => {this.openWindow('mikeposner')} } id='portfolio-mikeposner-img'>
              		            </Col>
              		            <Col xs onClick={ () => {this.openWindow('starwood')} } id='portfolio-starwood-img'>
              		            </Col>
              		            <Col xs onClick={ () => {this.openWindow('pilatesplatinum')} } id='portfolio-pilatesplatinum-img'>
              		            </Col>
              		        </Row>
              		        {/* Partner pics */}
              		        <Row style={ title_row_style }>
              		            <Col xs style={ title_col_style }>
              		                <h3 style={ title_content_style }>Partners</h3>
              		            </Col>
              		        </Row>
              		        <Row style={row_style}>
              		            <Col xs onClick={ () => {this.openWindow('trapjumpin')} } id='portfolio-trapjumpin-img'>
              		            </Col>
              		        </Row>
              		    </Grid>
              		</div>
              		
              	</div>
    } 
}

export default Portfolio