import React from 'react';

const withForm = (Component) => class FormComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit(action){
        action(this.state);
    }
    render(){
        return(
            <Component 
                handleChange = {this.handleChange} 
                formState = {this.state}
                handleSubmit = { this.handleSubmit }    
            />
        );
    }
}

export default withForm;