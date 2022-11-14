import React, { Component } from 'react'
import NutritionService from '../services/NutritionService';

class CreateNutritionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            nutrition_id: this.props.match.params.id,
            nutritionItem: '',
            calories: '',
            protein: '',
            carbs: '',
            fats: ''
        }
        this.changeNutritionItemHandler = this.changeNutritionItemHandler.bind(this);
        this.changeCaloriesHandler = this.changeCaloriesHandler.bind(this);
        this.changeProteinHandler = this.changeProteinHandler.bind(this);
        this.changeCarbsHandler = this.changeCarbsHandler.bind(this);
        this.changeFatsHandler = this.changeFatsHandler.bind(this);
        this.saveOrUpdateNutrition = this.saveOrUpdateNutrition.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.nutrition_id === '_add'){
            return
        }else{
            NutritionService.getNutritionById(this.state.nutrition_id).then( (res) =>{
                let nutrition = res.data;
                this.setState({nutritionItem: nutrition.nutritionItem,
                    calories: nutrition.calories,
                    protein: nutrition.protein,
                    carbs: nutrition.carbs,
                    fats: nutrition.fats
                });
            });
        }        
    }
    saveOrUpdateNutrition = (e) => {
        e.preventDefault();
        let nutrition = {nutritionItem: this.state.nutritionItem, calories: this.state.calories, protein: this.state.protein, carbs: this.state.carbs, fats: this.state.fats};
        console.log('nutrition => ' + JSON.stringify(nutrition));

        // step 5
        if(this.state.nutrition_id === '_add'){
            NutritionService.createNutrition(nutrition).then(res =>{
                this.props.history.push('/nutrition');
            });
        }else{
            NutritionService.updateNutrition(nutrition, this.state.nutrition_id).then( res => {
                this.props.history.push('/nutrition');
            });
        }
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

    getTitle(){
        if(this.state.nutrition_id === '_add'){
            return <h3 className="text-center">Add Nutrition</h3>
        }else{
            return <h3 className="text-center">Update Nutrition</h3>
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
                                            <label> Nutrition Item: </label>
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
                                            <label> fats: </label>
                                            <input placeholder="Fats" name="fats" className="form-control" 
                                                value={this.state.fats} onChange={this.changeFatsHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateNutrition}>Save</button>
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

export default CreateNutritionComponent
