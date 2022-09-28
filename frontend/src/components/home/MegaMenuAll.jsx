import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';

class MegaMenuAll extends Component {
     static contextType = AppContext;
     constructor(props){
          super(props);
     }

     componentDidMount(){
          this.MegaMenu();
     }
     MenuItemClick=(event)=>{
          event.target.classList.toggle("active");
          var panel = event.target.nextElementSibling;
          if(panel.style.maxHeight){
               panel.style.maxHeight = null;
          }else{
               panel.style.maxHeight= panel.scrollHeight+ "px"
          }

     }



     MegaMenu(){
          
          var acc = document.getElementsByClassName("accordionAll");
          var accNum = acc.length;
          var i;
          for(i=0;i<accNum;i++){
               acc[i].addEventListener("click",function (){
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if(panel.style.maxHeight){
                         panel.style.maxHeight = null;
                    }else{
                         panel.style.maxHeight= panel.scrollHeight+ "px"
                    }
               })
          }
     }


     render() {
          const categories = this.context.categories;
          let cat = categories.map(item => {
               return <div key={item.id}>
                    <button onClick={this.MenuItemClick} className="accordionAll">
                         <img className="accordionMenuIconAll" src={item.image} />&nbsp; {item.name}
                    </button>
                    <div className="panelAll">
                         <ul>
                              {item.sub_categories.map(sub => {
                                   return <li><Link to={"/subproductcategory/"+sub.id} className="accordionItemAll" > {sub.sub_name}</Link></li>;
                              })}
                         </ul>
                    </div>
               </div>;

          });
          return (
               <div className="accordionMenuDivAll">
                    <div className="accordionMenuDivInsideAll">
                         {cat}
                    </div>

               </div>
          )
     }
}

export default MegaMenuAll