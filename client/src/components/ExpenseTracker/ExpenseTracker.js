import React, { Component } from 'react';
import Header from './Header';

class ExpenseTracker extends Component {
  componentDidMount() {
    console.log('ExpenseTracker componentDidMount-->' )
  }
  render() {
    const title = "Expense Report"
    const subtitle = "3 days to work on this app"
    return (
      <div>
        <button onClick={this.props.activateRight}>Back</button>
        <Header
          title={title}
          subtitle={subtitle}
        />
        <a href="https://expense-report-react.herokuapp.com">Got to deployed app</a>
      </div>
    )
  }
}

export default ExpenseTracker
