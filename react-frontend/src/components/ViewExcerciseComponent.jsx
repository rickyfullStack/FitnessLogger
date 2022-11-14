import React, { Component } from 'react'
import WorkoutService from '../services/WorkoutService'

class ViewExcerciseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            excercise: {}
        }
    }

    componentDidMount(){
        WorkoutService.getExcerciseById(this.state.id).then( res => {
            this.setState({excercise: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Excercise Name: </label>
                            <div> { this.state.excercise.excerciseName }</div>
                        </div>
                        <div className = "row">
                            <label> Sets: </label>
                            <div> { this.state.excercise.sets }</div>
                        </div>
                        <div className = "row">
                            <label> Reps: </label>
                            <div> { this.state.excercise.reps }</div>
                        </div>
                        <div className = "row">
                            <label> Weight: </label>
                            <div> { this.state.excercise.weight }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewExcerciseComponent
