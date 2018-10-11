import React, { Component } from 'react';
import {connect} from 'react-redux';
class TrainerDetails extends Component {
    render() {
        return (
            <div>
               { !this.props.trainer?(<h3>Select trainer</h3>):(<div>
                  <img src={this.props.trainer.thumbnail}></img>
                  <h2>
                      {this.props.trainer.first}
                      {this.props.trainer.last}
                  </h2>
                  <h3>
                      Age:{this.props.trainer.age}
                  </h3>
                  <h3>
                      Description:{this.props.trainer.description}
                  </h3>
                  
              </div>)

              }  
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{trainer:state.activeTrainer}
}
export default connect(mapStateToProps)(TrainerDetails);