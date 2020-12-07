import React from 'react';

const withForm = (Component) => class FormComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeManual = this.handleChangeManual.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setError = this.setError.bind(this);
    }
    handleChange(e){
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }
    handleChangeManual(e){
        this.setState(e);
    }
    handleSubmit(action){
        action(this.state);
    }
    setError(err){
        this.setState({error: err})
    }
    render(){
        return(
            <Component 
                {...this.props}
                handleChange = {this.handleChange} 
                handleChangeManual = {this.handleChangeManual} 
                formState = {this.state}
                handleSubmit = { this.handleSubmit }  
                setError = {this.setError}
            />
        );
    }
}

export default withForm;