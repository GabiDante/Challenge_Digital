import React,{Component} from "react"

class PrimeraApi extends Component{
    constructor(){
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        fetch("/api/products")
        .then(res => res.json())
        .then(data => {
            this.setState({products: data.data})
        })
        .catch(error => console.log(error))
    }
    render(){
        return(
            <div className="row">
                {this.state.products.map((product, i) =>
                <div key = {i + product} className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                    {product.name}
                    {product.brands.name}
                    {product.materials.name}
                    {product.colors.name}
                    {product && product.image && product.image.url}
                    {product.description}
                    </div>
                </div>
                )
            }

            </div>
        )
    }
}

export default PrimeraApi