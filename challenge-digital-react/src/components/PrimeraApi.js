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
            <div>
            <h2 className="text-center my-[5rem]">Lista de productos</h2>
            <div className="flex flex-wrap">
                {this.state.products.map((product, i) => {
                    return (
                        <div key = {i + product}>  
                            <div className="bg-gray-100 w-[25rem] p-[1rem] m-[2rem] rounded-lg">
                                <img src={product.image?.url} alt="card_img" className="rounded-lg" />
                                <p className="text-xl font-semibold text-gray-800 my-3">{product.name}</p>
                                <p className="text-sm font-semibold text-gray-700 mb-3">{product.brands?.name} - {product.colors?.name} - {product.materials?.name}</p>
                                <p className="font-semibold text-gray-700 mb-3">{product.description}</p>
                                <div className="flex">
                                    <p className="text-lg font-semibold text-gray-700 mb-3 flex-1">Price </p><p className="text-lg">U$S: {product.price}</p>
                                </div>
                            </div>
                        </div>
                    ) 
                }  
                )
            }

            </div>
            </div>
        )
    }
}

export default PrimeraApi