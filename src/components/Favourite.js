import axios from 'axios'
import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import FavCards from './FavCards'
import ModelForm from './ModelForm'
import { withAuth0 } from '@auth0/auth0-react'



class Favourite extends Component {


    constructor(props) {
        super(props)

        this.state = {
            favData: [],
            show: false,
            strDrinkThumb: " ",
            strDrink: " ",
            idDrink: " ",
            showModel: false,
            index: 0

        }
    }


    componentDidMount = () => {
        if (this.props.auth0.isAuthenticated){
        let url2 = `http://localhost:4002/getData/${this.props.auth0.user.email}`
        axios.get(url2).then(element => {
            this.setState({
                favData: element.data,
                show: true
            })
        })
    }

}

    delete = (index) => {
        const id = this.state.favData[index]._id
        axios.delete(`http://localhost:4002/deletejuice/${id}`).then(item => {
            this.setState({
                favData: item.data,
                show: true
            })
        })
    }

    showModelform = (index) => {
        this.setState({
            strDrinkThumb: this.state.favData[index].strDrinkThumb,
            strDrink: this.state.favData[index].strDrink,
            idDrink: this.state.favData[index].idDrink,
            showModel: true,
            index: index
        })

    }

    handleClose = () => {
        this.setState({
            showModel: false
        })
    }

    update = (e) => {
        e.preventDefault();
        const id = this.state.favData[this.state.index]._id
        let data = {
            strDrinkThumb: e.target.strDrinkThumb.value,
            strDrink: e.target.strDrink.value,
            idDrink: e.target.idDrink.value
        }
        axios.put(`http://localhost:4002/updatejuice/${id}`, data).then(item => {
            this.setState({
                favData: item.data,

            })
        })
    }


    render() {
        return (
            <>

                <Row style={{ gap: '60px', marginTop: '50px' }}>
                    {this.state.show && this.state.favData.map((item, idx) => {
                        return (
                            <FavCards item={item} idx={idx} delete={this.delete} showModelform={this.showModelform} />
                        )
                    })}

                    <ModelForm strDrinkThumb={this.state.strDrinkThumb} strDrink={this.state.strDrink} idDrink={this.state.idDrink}
                          showModel={this.state.showModel} handleClose={this.handleClose} update={this.update}
                    />
                </Row>

            </>

        )
    }
}

export default withAuth0(Favourite)
