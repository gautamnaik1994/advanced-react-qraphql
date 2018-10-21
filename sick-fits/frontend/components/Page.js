import React, {Component,Fragment} from 'react';
import Header from './Header';

class Page extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <Header/>
                {this.props.children}
            </Fragment>
        )
    }
}

export default Page
