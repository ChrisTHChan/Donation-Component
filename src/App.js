import React from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      donationTargetValue: 500,
      moneyLeft: 500,
      numberOfDonors: 0,
      valueToBeDonated: '',
      totalMoneyDonated: 0,
    }
  }

  setDonationValue = (e) => {
    this.setState({valueToBeDonated: e.target.value})
  }

  handleDonateClick = () => {
    this.setState({numberOfDonors: this.state.numberOfDonors + 1})
    this.setState({totalMoneyDonated: this.state.totalMoneyDonated + parseInt(this.state.valueToBeDonated)})
    if (this.state.valueToBeDonated > this.state.moneyLeft) {
      this.setState({moneyLeft: 0})
    } else {
      this.setState({moneyLeft: this.state.moneyLeft - this.state.valueToBeDonated})
    }
    this.setState({valueToBeDonated: ''})
  }

  render() {
    const {donationTargetValue, moneyLeft, numberOfDonors, valueToBeDonated, totalMoneyDonated} = this.state
    return (
      <div className='App'>
        <div className='thought-bubble'>
          <div><span className='bold'>${moneyLeft}</span> still needed for this project</div>
        </div>
        <div className='progress-bar'>
          <div style={{
            width: `${(totalMoneyDonated/donationTargetValue)*100}%`,
            backgroundColor: '#EF5F3C',
            height: '20px',
          }}>
          </div>
        </div>
        <div className='main-content'>
          <div><span className='orange'>Only 3 days left</span> to fund this project.</div>
          <br/>
          <div>Join the <span className='grey'>{numberOfDonors}</span> other donors who have already supported this project. Every dollar helps.</div>
          <br/>
          <div className='button-input-container'>
            <input 
            type='number' 
            className='donation-input' 
            value={valueToBeDonated} 
            onChange={this.setDonationValue}/>
            <button 
            className={`${valueToBeDonated === '' || 
            moneyLeft === 0 ? 'donate-button-disabled' : 'donate-button'}`} 
            disabled={valueToBeDonated === '' || moneyLeft === 0 ? true : false} 
            onClick={this.handleDonateClick}>
              Give Now
            </button>
          </div>
          <br/>
          <div className={`${valueToBeDonated === '' ? 'explanation-link-invisible' : 'explanation-link'}`}>
            Why give ${valueToBeDonated}?
          </div>
        </div>
        <div className='footer-button-container'>
          <button className='footer-button'>Save for later</button>
          <button className='footer-button'>Tell your friends</button>
        </div>
      </div>
    )
  }
}

export default App;
