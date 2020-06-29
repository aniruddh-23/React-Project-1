import React,{Component} from 'react';
import {Media, Card, CardImg, CardImgOverlay, CardText, CardBody} from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);
        // state used to save local prioivate component data
        //only calss compoenets can have local state
        // need to use this.setState to change component state
        this.state={
        };
    }

    render(){
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 mt-5">
                     <Media tag="li">
                         <Media left middle>
                             <Media object src={dish.image} alt={dish.name}/>
                         </Media>
                         <Media body className="ml-5">
                         
                             <Media heading>{dish.name}</Media>
                             <p>{dish.description}</p>
                         </Media>
                     </Media>
                </div>
            );
        });

        return (
             <div className="container">
                 <div className="row">
                    <Media list>
                        {menu }
                    </Media>
                 </div>
             </div>
        );
    }
}

export default Menu;