import React, { Component } from 'react';

class CreateWallet extends Component {
    
    /* constructor(props) {
        super(props)

        this.state = {
            name:'',
            accountnumber:'',
            description:'',
            priority:''
        }
    }
    changeHandler = (event,fieldName) =>{
        this.setState({
            [fieldName]: event.target.value
        })
    }
    submitHandler = (event) => {
        const newWallet = {
            name:this.state.name,
            accountnumber: this.state.accountnumber;
            description:this.state.description,
            priority:this.state.priority
        }
        axios.post('',newWallet)
        .then((res) => {
            alert("Success")
        }).catch((err)=> {
            alert("Error")
        })
        event.preventDefault()
    }
    */
    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center"><i>Create Wallet</i></h5>
                           <br></br>
                            <form >
                                <div className="form-group">
                                    <input id="nm" type="text"  className="form-control form-control-lg " placeholder="Account Name" pattern="[A-Za-z]{0,8}" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="no" className="form-control form-control-lg" placeholder="Account No" pattern="[0-9]" required/>
                                </div>
                                <div className="form-group">
                                    <textarea id="desc" className="form-control form-control-lg" placeholder="Description" pattern="[A-Za-z]" required></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="amount" className="form-control form-control-lg" placeholder="Enter Balance Amount"  pattern="[0-9]" required/>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" id="create" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateWallet;