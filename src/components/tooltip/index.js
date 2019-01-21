import React, { Component } from 'react';
import './tooltip.css';

class Tooltip extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        displayTooltip: false
      }
      this.hideTooltip = this.hideTooltip.bind(this)
      this.showTooltip = this.showTooltip.bind(this)
    }
    
    hideTooltip () {
      this.setState({displayTooltip: true})
      
    }
    showTooltip () {
      this.setState({displayTooltip: true})
    }
  
    render() {
      let message = this.props.message
      return (
        <span className='tooltip'
            onMouseLeave={this.hideTooltip}
          >
            {this.state.displayTooltip &&
                <div className="tooltip-bubble tooltip-left">
                    <div className='tooltip-message'>{message}</div>
                </div>
             }

          <span 
            className='tooltip-trigger'
            onMouseOver={this.showTooltip}
            >
            {this.props.children}
          </span>
        </span>
      )
    }
  }

  export default Tooltip;