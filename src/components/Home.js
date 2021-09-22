import axios from 'axios'
import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import JuiceCard from './JuiceCard'
import { withAuth0 } from '@auth0/auth0-react'




export class Home extends Component {


    constructor(props) {
        super(props)

        this.state = {
            juicedata: [],
            show: false
        }
    }


    componentDidMount = () => {
        let url2 = 'http://localhost:4002/getjuice'
        axios.get(url2).then(element => {
            this.setState({
                juicedata: element.data,
                show: true
            })
        })
    }
    
    addjuice=(data)=>{
        let newData={
            email:this.props.auth0.user.email,
            strDrinkThumb: data.strDrinkThumb,
            strDrink: data.strDrink,
            idDrink: data.idDrink ,
        }
        axios.post('http://localhost:4002/addjuice',newData)
    }

    render() {

        return (
            <>
              <Row style={{gap:'60px' , marginTop:'50px'}}>
                  {this.state.show && this.state.juicedata.map((item ,idx)=>{
                      return(
                          <JuiceCard item={item} addjuice={this.addjuice}/>
                      )
                })
            }

                </Row>


            </>
        )
    }
}

export default withAuth0(Home) 
