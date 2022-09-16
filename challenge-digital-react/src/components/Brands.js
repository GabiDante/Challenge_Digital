import React,{Component} from "react"

class Brand extends Component{
    constructor(){
        super();
        this.state = {
            brands: []
        }
    }
    componentDidMount(){
        fetch("/api/brand")
        .then(res => res.json())
        .then(data => {
            this.setState({brands: data.data})
        })
        .catch(error => console.log(error))
    }
    render(){
        return(
            <div className="row">
                {this.state.brands.map((brand, i) =>
                <div key = {i + brand} className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                    {brand.name}
                    
                     </div>
                </div>
                )
            }

            </div>
        )
    }
}

export default Brand