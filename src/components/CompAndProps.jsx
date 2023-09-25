import React, { Component } from "react";
import '../App.css';
function Square(props){
 return (
 <div>
 <h2> Renaldy Andara Permata </h2>
 <h3> re132218@gmail.com</h3>
 <p>21120120130055{props.komponen}</p>
 <a href={props.link}>WA Renaldy</a>
 </div>
 );
 
}
function Square1(props){
    return (
    <div>
    <h2> Fairuzsyah Naufal Fikri </h2>
    <h3> fairuz@gmail.com</h3>
    <p>21120120130110{props.komponen}</p>
    <a href={props.link}>WA Fairuz</a>
    </div>
    );
    
}
function Square2(props){
    return (
    <div>
    <h2> M G Abdul Nashr </h2>
    <h3> emghanmuslim@gmail.com</h3>
    <p>21120120120029{props.komponen}</p>
    <a href={props.link}>WA Abdul</a>
    </div>
    );
    
}
function Square3(props){
    return (
    <div>
    <h2> Daffa Abhyasa Santoso </h2>
    <h3> Daffa@gmail.com</h3>
    <p>21120120130093{props.komponen}</p>
    <a href={props.link}>WA Daffa</a>
    </div>
    );
    
}
export default class CompAndProps extends Component{
 render(){
 const bgColor = {
 backgroundColor: this.props.bgColor
 }
 return (
 <div className="wrapper">
 <div className ="User-info1" >
 <Square komponen='' link= 'https://wa.me/6282242528770'/> </div>
 <div className ="User-info2" >
<Square1 komponen='' link= 'https://wa.me/6282324413409'/> </div>
<div className ="User-info3" >
 <Square2 komponen='' link= 'https://wa.me/6287879796974'/> </div>
 <div className ="User-info4" >
 <Square3 komponen='' link= 'https://wa.me/628111555406'/> </div>
</div>
 )
 }
}
