import React from 'react'

const text_content_sub = { minHeight: '300px', color: 'rgb(35, 35, 35)', backgroundColor: 'rgb(202, 228, 255)', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }
const text_content_sub_pos = { position:'relative' }

export default React.createClass({
  
  render() {
    return (
        <div style={ text_content_sub_pos }>
          	<div style={ text_content_sub }>
          	    <p>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</p>
          	</div>
        </div>
    )}
})