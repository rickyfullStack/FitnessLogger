import React, { Component } from 'react'
import NutritionService from '../services/NutritionService';

class UpdateNutritionComponent extends Component {
    constructor(props) {
      super(props)

        this.state = {
            nutrition_id: this.props.match.params.id,
            nutritionItem: '',
            calories: '',
            protein: '',
            carbs: '',
            fats:''
        }
        this.changeNutritionItemHandler = this.changeNutritionItemHandler.bind(this);
        this.changeCaloriesHandler = this.changeCaloriesHandler.bind(this);
        this.changeProteinHandler = this.changeProteinHandler.bind(this);
        this.changeCarbsHandler = this.changeCarbsHandler.bind(this);
        this.changeFatsHandler = this.changeFatsHandler.bind(this);
        this.updateNutrition = this.updateNutrition.bind(this);
    }

    componentDidMount(){
        NutritionService.getNutritionByID(this.state.id).then( (res) =>{
            let nutrition = res.data;
            this.setState({nutritionItem: nutrition.nutritionItem,
                calories: nutrition.calories,
                protein : nutrition.protein,
                carbs : nutrition.carbs,
                fats: nutrition.fats
            });
        });
    }

    updateNutrition = (e) => {
        e.preventDefault();
        let nutrition = {nutritionItem: this.state.nutritionItem, calories: this.state.calories, protein: this.state.protein, carbs: this.state.carbs, fats: this.state.fats};
        console.log('nutrition => ' + JSON.stringify(nutrition));
        console.log('id => ' + JSON.stringify(this.state.id));
        NutritionService.updateNutrition(nutrition, this.state.id).then( res => {
            this.props.history.push('/nutrition');
        });
    }
    
    changeNutritionItemHandler= (event) => {
        this.setState({nutritionItem: event.target.value});
    }

    changeCaloriesHandler= (event) => {
        this.setState({calories: event.target.value});
    }

    changeProteinHandler= (event) => {
        this.setState({protein: event.target.value});
    }
    changeCarbsHandler= (event) => {
        this.setState({carbs: event.target.value});
    }
    changeFatsHandler= (event) => {
        this.setState({fats: event.target.value});
    }

    cancel(){
        this.props.history.push('/nutrition');
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
                                            <label> Nutrition item: </label>
                                            <input placeholder="Nutrition Item" name="nutritionItem" className="form-control" 
                                                value={this.state.nutritionItem} onChange={this.changeNutritionItemHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Calories: </label>
                                            <input placeholder="Calories" name="calories" className="form-control" 
                                                value={this.state.calories} onChange={this.changeCaloriesHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Protein: </label>
                                            <input placeholder="Protein" name="protein" className="form-control" 
                                                value={this.state.protein} onChange={this.changeProteinHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Carbs: </label>
                                            <input placeholder="Carbs" name="carbs" className="form-control" 
                                                value={this.state.carbs} onChange={this.changeCarbsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Fats: </label>
                                            <input placeholder="Fats" name="fats" className="form-control" 
                                                value={this.state.fats} onChange={this.changeFatsHandler}/>
                                        </div> 
                                        <button className="btn btn-success" onClick={this.updateNutrition}>Save</button>
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

export default UpdateNutritionComponent
