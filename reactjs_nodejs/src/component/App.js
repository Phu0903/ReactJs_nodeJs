
import './App.css';
import React, { Component } from 'react';
import HeadTittle from './HeadTittle';
import Products from './Product';

const axios = require('axios');

const getProductData = () => {
  return axios.get('/xemjson')
    .then(function (res) {
      return res.data
    })
}

// Make a request for a user with a given ID
// axios.get('http://localhost:4000/xemjson')
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(function (error) { // bắt lỗi
//     // handle error
//     console.log(error);
//   });

const addProductAction = (product_name,product_price,image) =>{
  return axios.post('/add',{product_name,product_price,image})
  .then((resp)=>resp.data);
}



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:null,
      product_name:'',
      product_price:'',
      image:''
    }
  }
  isChange = (e ) =>{
    var name = e.target.name;
    var value = e.target.value;
  this.setState({
      [name]:value
  })
}
HandleClick = () =>{
  var product_name = this.state.product_name;
  var product_price = this.state.product_price;
  var image = this.state.image
    var dataTemp =[];
    var item ={};
    item.product_name = product_name;
    item.product_price= product_price;
    item.image = image;

    dataTemp = this.state.data;
    if(item.product_name !== ''){
        dataTemp.push(item)
        this.setState({
          data:dataTemp
        })
    }
  
  
    addProductAction(this.state.product_name,this.state.product_price,this.state.image)
    .then((Response) =>{
          console.log(Response);
    })
  }
  componentWillMount(){
    if ( this.state.data === null)
    {
     getProductData().then((res) =>{
       this.setState({
         data:res
       })
     })
    }
  }
  printData=() =>{
     if(this.state.data !==null){
       return    this.state.data.map((val,key)=>{
         return (
          <Products
          key={key}
           product_name={val.name_products}
          product_price={val.products_price}
          image={val.image}
        ></Products>
         )
      
       })
     }
  }

  
  render() {
    console.log(this.state.data)
    return (
      <div>
             <div className="container">
  <div className="row">
    <div className="col-8 mx-auto">
      <form >
        <div className="form-group">
          <label htmlFor="product_name">Tên sản phẩm</label>
          <input onChange={(e)=>this.isChange(e)} type="text" name="product_name" id="product_name" className="form-control" placeholder="Nhập tên sản phẩm" aria-describedby="name_text" />
          <small id="name_text" className="text-muted">Nhập tên sản phẩm</small>
        </div>    
        <div className="form-group">
          <label htmlFor="product_price">Giá sản phẩm sản phẩm</label>
          <input onChange={(e)=>this.isChange(e)} type="text" name="product_price" id="product_price" className="form-control" placeholder="Nhập tên sản phẩm" aria-describedby="name_text" />
          <small id="name_text" className="text-muted">Nhập tên sản phẩm</small>
        </div>  
        <div className="form-group">
          <label htmlFor="image">Đường link ảnh</label>
          <input onChange={(e)=>this.isChange(e)} type="text" name="image" id="image" className="form-control" placeholder="Nhập tên sản phẩm" aria-describedby="name_text" />
          <small id="name_text" className="text-muted">Nhập tên sản phẩm</small>
        </div> 
        <button type="reset" onClick={()=>this.HandleClick()} className="btn btn-primary">Thêm mới</button>
      </form>
    </div>
  </div>
</div>
        <HeadTittle></HeadTittle>
        <div className="container">
          <div className="row">
            
            {this.printData()}
          </div>
        </div>
      </div>
    );
  }
}



export default App;
