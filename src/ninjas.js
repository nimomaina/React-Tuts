import React, {Component} from  'react';

class Tutorial extends Component{
    render() {
        const { name, age, company }= this.props;
        return(
            <div className="ninja-tutorial">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Company: {company}</div>
            </div>
        )
    }
}

export default Tutorial