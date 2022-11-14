import React, { Component } from 'react'
import WorkoutService from '../services/WorkoutService'
import formats from '../components/spacer.module.css'

class ListExcerciseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                excercises: []
        }
        this.addExcercise = this.addExcercise.bind(this);
        this.updateExcercise = this.editExcercise.bind(this);
        this.deleteExcercise = this.deleteExcercise.bind(this);
    }

    deleteExcercise(id){
        WorkoutService.deleteExcercise(id).then( res => {
            this.setState({excercises: this.state.excercises.filter(excercise => excercise.id !== id)});
        });
    }
    viewExcercise(id){
        this.props.history.push(`/view-excercise/${id}`);
    }
    editExcercise(id){
        this.props.history.push(`/add-excercise/${id}`);
    }

    componentDidMount(){
        WorkoutService.getExcercise().then((res) => {
            this.setState({ excercises: res.data});
        });
    }

    addExcercise(){
        this.props.history.push('/add-excercise/_add');
    }

    render() {
        return (
            
            <div>
                 <h2 className="text-center">Excercises List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addExcercise}> Add Excercise</button>
                    <div className={formats.spacer}></div>
                    <div> <a href="https://www.bodybuilding.com/fun/workout-plans-programs">  <button className='btn btn-primary'>Workout templates</button></a></div>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Excercise Name</th>
                                    <th> Sets</th>
                                    <th> Reps</th>
                                    <th> Weight</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.excercises.map(
                                        excercise => 
                                        <tr key = {excercise.id}>
                                             <td> { excercise.excerciseName} </td>   
                                             <td> { excercise.sets}</td>
                                             <td> {excercise.reps}</td>
                                             <td> {excercise.weight}</td>
                                             <td>
                                                 <button onClick={ () => this.editExcercise(excercise.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteExcercise(excercise.id)} className="btn btn-danger">Delete </button>
                        
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListExcerciseComponent
