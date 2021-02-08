import React, { Component } from 'react'
import { Button,
         Form,
         Grid,
         Header,
         Image,
         Segment,
         Container,
         Statistic,
         Message,
         Divider } from 'semantic-ui-react'
import './App.css';

class App extends Component {

  state = {
    amount: 0,
    term: 0,
    rаte: 0,
    principal: 0,
    interest: 0,
    monthlyPayments: 0,
    amountFormError: false,
    rateFormError: false,
    termFormError: false,
    termYearFormDisabled: false,
    termMonthFormDisabled: false
  }

  onFormChange = (e, value) => {
    if (e.target.name === 'amount') {
      let amount;
      amount = parseInt(e.target.value)
      this.setState({amount: amount})
      if (amount >= 1000 && amount <= 1000000) {
        this.setState({amountFormError: false})
      } else {
        this.setState({amountFormError: true})
      }
    } else if (e.target.name === 'rate') {
      let rate;
      rate = parseFloat(e.target.value)
      this.setState({rate: rate})
      if (rate > 0.1 && rate < 100) {
        this.setState({rateFormError: false})
      } else {
        this.setState({rateFormError: true})
      }
    } else if (e.target.name === 'year') {
      if (e.target.value === '') {
        this.setState({termMonthFormDisabled: false})
      } else {
        this.setState({termMonthFormDisabled: true})
      }
      let term;
      term = parseInt(e.target.value) * 12
      this.setState({term: term})
      if (term >= 1 && term <= 40) {
        this.setState({termFormError: false})
      } else {
        this.setState({termFormError: true})
      }
    } else if (e.target.name === 'months') {
      if (e.target.value === '') {
        this.setState({termYearFormDisabled: false})
      } else {
        this.setState({termYearFormDisabled: true})
      }
      let term;
      term = parseInt(e.target.value)
      this.setState({term: term})
      if (term >= 1 && term <= 40) {
        this.setState({termFormError: false})
      } else {
        this.setState({termFormError: true})
      }
    }
  }

  onCalculateClick = () => {
    if (this.state.amountFormError === false && this.state.rateFormError === false && this.state.termFormError === false) {
      let p = this.state.amount
      let r = (this.state.rate / 100) / 12
      let n = this.state.term
      let totalInterest;
      let totalInterestRounded;
      let monthlyPayments;
      let monthlyPaymentsRounded;
      monthlyPayments = p * (r * ((1 + r)**n))/(((1 + r)**n) - 1)
      monthlyPaymentsRounded = monthlyPayments.toFixed(2)
      totalInterest = (monthlyPayments * n) - p
      totalInterestRounded = totalInterest.toFixed(2)
      this.setState({principal: p, interest: totalInterestRounded, monthlyPayments: monthlyPaymentsRounded})
    }
  }

  render() {

    return(
      <Container style={{ marginTop: '6em' }}>
        <Header as='h1' icon inverted textAlign='center'>
         <Image src='/figtechlogo.png' centered size="massive"/>
        </Header>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 700 }}>
           <Header as='h2' color='teal' textAlign='center'>
              Let's calculate your loan payments!
           </Header>
           <Segment inverted>
             <Grid columns={2} stackable centered>
               <Grid.Column>
                 <Form size='large' error>
                   <Segment stacked>
                     {this.state.amountFormError ?
                     <Form.Input
                      name='amount'
                      label='Loan amount'
                      icon='dollar sign'
                      iconPosition='left'
                      type='float'
                      onChange={(e, target) => this.onFormChange(e, target)}
                      error='Please enter a valid loan amount (between $1,000 and $1,000,000)'
                      fluid
                     />
                     :
                     <Form.Input
                       name='amount'
                       label='Loan amount'
                       icon='dollar sign'
                       iconPosition='left'
                       type='float'
                       onChange={(e, target) => this.onFormChange(e, target)}
                     />}
                     {this.state.rateFormError ?
                     <Form.Input
                       name='rate'
                       label='Interest rate per year'
                       icon='percent'
                       iconPosition='right'
                       type='float'
                       onChange={(e, target) => this.onFormChange(e, target)}
                       error='Please enter a valid interest rate (between 0.1% than 100%)'
                       fluid
                     />
                     :
                     <Form.Input
                       name='rate'
                       label='Interest rate per year'
                       icon='percent'
                       iconPosition='right'
                       type='float'
                       onChange={(e, target) => this.onFormChange(e, target)}
                     />
                     }
                     <Segment>
                       <Grid columns={2} relaxed='very'>
                         <Grid.Column>
                            {this.state.termYearFormDisabled ?
                              <Form.Input
                                name='year'
                                label='Loan term (years)'
                                type='float'
                                onChange={(e, target) => this.onFormChange(e, target)}
                                disabled
                              />
                              :
                              <Form.Input
                                name='year'
                                label='Loan term (years)'
                                type='float'
                                onChange={(e, target) => this.onFormChange(e, target)}
                              />
                            }
                         </Grid.Column>
                         <Grid.Column>
                           {this.state.termMonthFormDisabled ?
                             <Form.Input
                               name='months'
                               label='Loan term (months)'
                               type='float'
                               onChange={(e, target) => this.onFormChange(e, target)}
                               disabled
                             />
                             :

                             <Form.Input
                               name='months'
                               label='Loan term (months)'
                               type='float'
                               onChange={(e, target) => this.onFormChange(e, target)}
                             />
                           }
                         </Grid.Column>
                       </Grid>
                       <Divider vertical>Or</Divider>
                     </Segment>
                     {this.state.termFormError ?
                      <Form error>
                         <Message
                           error
                           header="Invalid loan term"
                           content='Must be between 1 and 40 years'
                         />
                       </Form>
                       :
                       null
                     }
                     <Divider hidden />
                     <Button color='teal' fluid size='large' onClick={this.onCalculateClick}>
                       Calculate
                     </Button>
                   </Segment>
                 </Form>
               </Grid.Column>
               <Grid.Column stretched verticalAlign='middle'>
                 <Statistic.Group horizontal inverted>
                   <Statistic>
                     <Statistic.Value>${this.state.principal}</Statistic.Value>
                     <Statistic.Label>Principal Paid</Statistic.Label>
                   </Statistic>
                   <Statistic>
                     <Statistic.Value>${this.state.interest}</Statistic.Value>
                     <Statistic.Label>Interest Paid</Statistic.Label>
                   </Statistic>
                  </Statistic.Group>
                  <Divider inverted/>
                  <Statistic inverted>
                    <Statistic.Value>${this.state.monthlyPayments}</Statistic.Value>
                    <Statistic.Label>Per Month</Statistic.Label>
                  </Statistic>
               </Grid.Column>
             </Grid>
           </Segment>
          </Grid.Column>
        </Grid>
      </Container>
)
  }
}

export default App;
