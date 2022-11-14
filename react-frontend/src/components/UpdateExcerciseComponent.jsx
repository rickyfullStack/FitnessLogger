import React, { Component } from 'react'
import WorkoutService from '../services/WorkoutService';

class UpdateExcerciseComponent extends Component {
    constructor(props) {
      super(props)

        this.state = {
            id: this.props.match.params.id,
            excerciseName: '',
            sets: '',
            reps: '',
            weight: ''
        }
        this.changeExcerciseNameHandler = this.changeExcerciseNameHandler.bind(this);
        this.changeSetsHandler = this.changeSetsHandler.bind(this);
        this.changeRepsHandler = this.changeRepsHandler.bind(this);
        this.changeWeightHandler = this.changeWeightHandler.bind(this);
        this.updateExcercise = this.updateExcercise.bind(this);
    }

    componentDidMount(){
        WorkoutService.getExcerciseByID(this.state.id).then( (res) =>{
            let excercise = res.data;
            this.setState({excerciseName: excercise.excerciseName,
                sets: excercise.sets,
                reps : excercise.reps,
                weight : excercise.weight
            });
        });
    }

    updateExcercise = (e) => {
        e.preventDefault();
        let excercise = {excerciseName: this.state.excerciseName, sets: this.state.sets, reps: this.state.reps, weight: this.state.weight};
        console.log('excercise => ' + JSON.stringify(excercise));
        console.log('id => ' + JSON.stringify(this.state.id));
        WorkoutService.updateExcercise(excercise, this.state.id).then( res => {
            this.props.history.push('/excercises');
        });
    }
    
    changeExcerciseNameHandler= (event) => {
        this.setState({excerciseName: event.target.value});
    }

    changeSetsHandler= (event) => {
        this.setState({sets: event.target.value});
    }

    changeRepsHandler= (event) => {
        this.setState({reps: event.target.value});
    }
    changeWeightHandler= (event) => {
        this.setState({weight: event.target.value});
    }

    cancel(){
        this.props.history.push('/excercises');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Excercises</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Excercise Name: </label>
                                            <input placeholder="Excercise Name" name="excerciseName" className="form-control" 
                                                value={this.state.excerciseName} onChange={this.changeExcerciseNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Sets: </label>
                                            <input placeholder="Sets" name="sets" className="form-control" 
                                                value={this.state.sets} onChange={this.changeSetsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Reps: </label>
                                            <input placeholder="Reps" name="reps" className="form-control" 
                                                value={this.state.reps} onChange={this.changeRepsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Weight: </label>
                                            <input placeholder="Reps" name="weight" className="form-control" 
                                                value={this.state.weight} onChange={this.changeWeightHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateExcercise}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateExcerciseComponent
