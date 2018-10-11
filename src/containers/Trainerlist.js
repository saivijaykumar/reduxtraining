import React, { Component } from 'react';
import { selectTrainer } from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
class Trainerlist extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {
                    this.props.trainers.map((obj)=>{
                            return <h4 className="text-danger" key={obj.id} onClick={()=>this.props.selectTrain(obj)}>
                                        <div>{obj.first}-{obj.last}</div>
                                    </h4>
                     } )
                    
                }
                
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
return{trainers:state.trainers}
}

const matchDispatchToProps=(dispatch)=>{
    return {selectTrain:bindActionCreators(selectTrainer,dispatch)}
}
export default connect(mapStateToProps,matchDispatchToProps)(Trainerlist);