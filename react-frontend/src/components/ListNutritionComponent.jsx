import React, { Component } from 'react'
import NutritionService from '../services/NutritionService'
import formats from '../components/spacer.module.css'


class ListNutritionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                nutrition: []
        }
        this.addNutrition = this.addNutrition.bind(this);
        this.updateNutrition = this.editNutrition.bind(this);
        this.deleteNutrition = this.deleteNutrition.bind(this);
    }

    deleteNutrition(id){
        NutritionService.deleteNutrition(id).then( res => {
            this.setState({nutrition: this.state.nutrition.filter(nutrition => nutrition.nutrition_id !== id)});
        });
    }
    viewNutrition(id){
        this.props.history.push(`/view-nutrition/${id}`);
    }
    editNutrition(id){
        this.props.history.push(`/add-nutrition/${id}`);
    }

    componentDidMount(){
        NutritionService.getNutrition().then((res) => {
            this.setState({ nutrition: res.data});
        });
    }

    addNutrition(){
        this.props.history.push('/add-nutrition/_add');
    }

    render() {
        return (
            
            <div>
                 <h2 className="text-center">Nutrition List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addNutrition}> Add Nutrition</button>
                    <div className={formats.spacer}></div>
                    <a href="https://www.bodybuilding.com/category/nutrition">  <button className='btn btn-primary'>Nutrition Guide</button></a>
                 </div>
              
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Nutrition Item</th>
                                    <th> Calories</th>
                                    <th> Protein</th>
                                    <th> Carbs</th>
                                    <th> Fats</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.nutrition.map(
                                        nutrition => 
                                        <tr key = {nutrition.nutrition_id}>
                                             <td> { nutrition.nutritionItem} </td>   
                                             <td> { nutrition.calories}</td>
                                             <td> { nutrition.protein}</td>
                                             <td> { nutrition.carbs}</td>
                                             <td> { nutrition.fats}</td>
                                             <td>
                                                 <button onClick={ () => this.editNutrition(nutrition.nutrition_id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteNutrition(nutrition.nutrition_id)} className="btn btn-danger">Delete </button>
                        
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

export default ListNutritionComponent
