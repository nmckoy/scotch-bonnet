import React from 'react'
// https://facebook.github.io/react/docs/dom-elements.html#style
const text_content_lead = {color: '#777', backgroundColor: 'white', textAlign: 'center', padding: '150px 80px', textAlign: 'justify'}
const text_content_lead_header = {textAlign: 'center'}

const text_content_sub = { color: 'rgb(35, 35, 35)', backgroundColor: 'rgb(202, 228, 255)', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }
const text_content_sub_pos = { position:'relative' }

export default React.createClass({
  
  render() {
    return  <div>
              <div className="contact-bgimg-1">
          			<div className="caption">
          				<span className="border"></span>
          			</div>
          		</div>
          
          		<div style={ text_content_lead }>
          			<h3 style={ text_content_lead_header }>Stub Contact</h3>
          			<p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>
          		</div>
          		
          		<div style={ text_content_sub_pos }>
          			<div style={ text_content_sub }>
          				<p>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</p>
          			</div>
          		</div>
          	</div>
    }
})