import React ,{Component} from 'react';
import './App.css';
import Product from './components/Product';

class App extends Component {
    
    constructor(props) {
        super(props);
        // this.onAddProduct = this.onAddProduct.bind(this);
        
    }


    onClick(){
        console.log('Day la app components');
    }
    onClick2(text){
        console.log(text);
    }
    onAddProduct = () => {
        console.log(this.refs.name.value);
    }

    render() {
        var products=  [
            {
                id: 1,
                name: "ip6",
                image: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/24/636812432713563751_ip-xr-den-4.png",
                price: 151399,  
                status: true
            }, 
            {
                id: 2,
                name: "ip7",
                image: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/24/636812432713563751_ip-xr-den-4.png",
                price: 151399,
                status: true
            },
            {
                id: 3,
                name: "ip8",
                image: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/24/636812432713563751_ip-xr-den-4.png",
                price: 151399,
                status: true
            }
        ];

        let elements = products.map((product, index) => {
            let result= '';

            if(product.status){
                result =
                <Product 
                    key={product.id}
                    price={product.price}
                    image={product.image}
                >
                {product.name}
                </Product>
            }
            return result;
        });

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand" >Drops</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <div className="panel panel-danger">
                                  <div className="panel-heading">
                                      <h3 className="panel-title">Them san pham</h3>
                                  </div>
                                  <div className="panel-body">
                                        <div className="form-group">
                                            <label >Ten San Pham</label>
                                            <input type="text" className="form-control" ref="name" />
                                        </div>
                                        <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>Luu</button>
                                  </div>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                               { elements }
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <button type="button" className="btn btn-danger" onClick={this.onClick}>
                                    Click me
                                </button>
                                <button type="button" className="btn btn-danger" onClick={ () =>{this.onClick2('abc')} }>
                                    Click test
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
