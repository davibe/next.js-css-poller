import React from 'react'
import fetch from 'isomorphic-fetch'

class CssPoller extends React.Component {
  
  constructor (props) {
    super()
    this.state = {}
    this.timeout = null
  }

  componentDidMount() { 
    this.refresh()
  }

  async refresh() {
    const url = this.props.href
    let style = ""
  
    try {
      style = await (await fetch(url)).text()
    } catch (e) {
      console.error(e)
    }

    if (this.state.style != style) {
      this.setState({ style: style })
    }

    if (this.timeout) { clearTimeout(this.timeout) }
    this.timeout = setTimeout(this.refresh.bind(this), 1000)
  }

  render() {
    return <style>{` ${ this.state.style || "" } `}</style>
  }

}

export default CssPoller
