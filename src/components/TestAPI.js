import React from 'react';
import axios from 'axios';

export default class TestAPI extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user:{}
    }
  }

  componentDidMount(){
    console.log(this.props)
    const { reqInitiated, reqSuccess } =this.props
    reqInitiated()

    const options = {
        method:'get',
        url:'https://gist.githubusercontent.com/mdsadiq/caba21da871e624587c1fd46b7c378a7/raw/f186aeea3296a68478a2b9cc8022c54c8473bf6d/user.json',
    }

    axios(options)
    .then((response)=>{
        reqSuccess()
        this.setState({ user:response.data })
    }).catch((err)=>{
        console.log(err)
    })
  }

  render(){
    console.log(this.props)
    const { apiStatus } =this.props
    console.log(apiStatus)
    const { user } = this.state
      return(
          <div style={{backgroundColor: 'white'}}>
            <h1>WELCOME TO TEST API</h1>
            {apiStatus ? "LOAding" : "done"}
            {/* {apiStatus && "LOADING...."} */}
            {user.name}
            <div>
              HEllo
            </div>
          </div>
      )
  }
}