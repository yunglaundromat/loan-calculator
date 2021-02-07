import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Segment, Container, Statistic, Divider } from 'semantic-ui-react'
import './App.css';

class App extends Component {

  state = {
    amount: 0,
    term: 0,
    rаte: 0,
    amountFormError: false,
    rateFormError: false,
    termFormError: false,
    termYearFormDisabled: false,
    termMonthFormDisabled: false
  }

  onCalculateClick() {
    console.log("function hit!")
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
      rate = parseInt(e.target.value)
      this.setState({rate: rate})
      if (rate > 0.1 && rate < 100) {
        this.setState({rateFormError: false})
      } else {
        this.setState({rateFormError: true})
      }
    } else if (e.target.name === 'year') {
      let term;
      term = parseInt(e.target.value * 12)
      this.setState({term: term, termMonthFormDisabled: true})
    } else if (e.target.name === 'months') {
      let term;
      term = parseInt(e.target.value)
      this.setState({term: term, termYearFormDisabled: true})
    }
  }

  onTermFormClick = (e, value) => {
    if (e.target.name === 'year') {
      this.setState({termMonthFormDisabled: true, termYearFormDisabled: false})
    } else if (e.target.name === 'months') {
      this.setState({termYearFormDisabled: true, termMonthFormDisabled: false})
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
                      type='number'
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
                       type='number'
                       onChange={(e, target) => this.onFormChange(e, target)}
                     />}
                     {this.state.rateFormError ?
                     <Form.Input
                       name='rate'
                       label='Interest rate per year'
                       icon='percent'
                       iconPosition='right'
                       type='number'
                       onChange={(e, target) => this.onFormChange(e, target)}
                       error='Please enter a valid interest rate (less than 100%)'
                       fluid
                     />
                     :
                     <Form.Input
                       name='rate'
                       label='Interest rate per year'
                       icon='percent'
                       iconPosition='right'
                       type='number'
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
                             type='number'
                             onChange={(e, target) => this.onFormChange(e, target)}
                             onClick={(e, target) => this.onTermFormClick(e, target)}
                             disabled
                           />
                           :
                           <Form.Input
                             name='year'
                             label='Loan term (years)'
                             type='number'
                             onChange={(e, target) => this.onFormChange(e, target)}
                             onClick={(e, target) => this.onTermFormClick(e, target)}
                           />
                           }
                         </Grid.Column>
                         <Grid.Column>
                           {this.state.termMonthFormDisabled ?
                           <Form.Input
                             name='months'
                             label='Loan term (months)'
                             type='number'
                             onChange={(e, target) => this.onFormChange(e, target)}
                             onClick={(e, target) => this.onTermFormClick(e, target)}
                             disabled
                           />
                           :
                           <Form.Input
                             name='months'
                             label='Loan term (months)'
                             type='number'
                             onChange={(e, target) => this.onFormChange(e, target)}
                             onClick={(e, target) => this.onTermFormClick(e, target)}
                           />
                           }

                         </Grid.Column>
                       </Grid>
                       <Divider vertical>Or</Divider>
                     </Segment>
                     <Button color='teal' fluid size='large' onClick={this.onCalculateClick}>
                       Calculate
                     </Button>
                   </Segment>
                 </Form>
               </Grid.Column>
               <Grid.Column stretched verticalAlign='middle'>
                 <Statistic.Group horizontal inverted>
                   <Statistic>
                     <Statistic.Value>$6000</Statistic.Value>
                     <Statistic.Label>Principal Paid</Statistic.Label>
                   </Statistic>
                   <Statistic>
                     <Statistic.Value>$1000</Statistic.Value>
                     <Statistic.Label>Interest Paid</Statistic.Label>
                   </Statistic>
                  </Statistic.Group>
                  <Divider inverted/>
                  <Statistic inverted>
                    <Statistic.Value>$100</Statistic.Value>
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
