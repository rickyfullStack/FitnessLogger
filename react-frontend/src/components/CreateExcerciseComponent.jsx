import React, { Component } from 'react'
import WorkoutService from '../services/WorkoutService';

class CreateExcerciseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
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
        this.saveOrUpdateExcercise = this.saveOrUpdateExcercise.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            WorkoutService.getExcerciseById(this.state.id).then( (res) =>{
                let excercise = res.data;
                this.setState({exerciseName: excercise.excerciseName,
                    sets: excercise.sets,
                    reps: excercise.reps,
                    weight: excercise.weight
                });
            });
        }        
    }
    saveOrUpdateExcercise = (e) => {
        e.preventDefault();
        let excercise = {excerciseName: this.state.excerciseName, sets: this.state.sets, reps: this.state.reps, weight: this.state.weight};
        console.log('excercise => ' + JSON.stringify(excercise));

        // step 5
        if(this.state.id === '_add'){
            WorkoutService.createExcercise(excercise).then(res =>{
                this.props.history.push('/excercises');
            });
        }else{
            WorkoutService.updateExcercise(excercise, this.state.id).then( res => {
                this.props.history.push('/excercises');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Excercises</h3>
        }else{
            return <h3 className="text-center">Update Excercises</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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
                                            <input placeholder="Weight" name="weight" className="form-control" 
                                                value={this.state.weight} onChange={this.changeWeightHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateExcercise}>Save</button>
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

export default CreateExcerciseComponent
