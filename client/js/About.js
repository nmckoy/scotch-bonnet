import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>About</h1>
        <video width="320" height="240" id="jacy-media-player">
          <source type="video/vimeo" src="https://vimeo.com/213865399" />
        </video>
      </div>
    )
  }
})