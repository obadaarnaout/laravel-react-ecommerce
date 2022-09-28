import React, { Component } from 'react'
import AppContext from '../AppContext';

class MegaMenuMobile extends Component {
    static contextType = AppContext;
    constructor(props) {
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

        let acc = document.getElementsByClassName('accordionMobile');
        let clicked = 0;
        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener('click',function () {
                acc[clicked].classList.remove("active");
                acc[clicked].nextElementSibling.style.maxHeight = null;
                let panel = this.nextElementSibling;
                if (i !== clicked) {
                    clicked = i;
                    this.classList.toggle("active");
                    panel.style.maxHeight= panel.scrollHeight+ "px"
                }
                else{
                    panel.style.maxHeight = null;
                    if (i === 0) {
                        clicked = 1;
                    }
                    else{
                        clicked = 0;
                    }
                }
            });
        }

    }

  render() {
    const categories = this.context.categories;
    let cat = categories.map(item => {
        return <div key={item.id}>
             <button onClick={this.MenuItemClick} className="accordionMobile">
                  <img className="accordionMenuIconMobile" src={item.image} />&nbsp; {item.name}
             </button>
             <div className="panelMobile">
                  <ul>
                       {item.sub_categories.map(sub => {
                            return <li><a href="#" className="accordionItemMobile" > {sub.sub_name}</a></li>;
                       })}
                  </ul>
             </div>
        </div>;

   });
    return (
        <div className="accordionMenuDivMobile">
            <div className="accordionMenuDivInsideMobile">


                {cat}



            </div>

        </div>
    )
  }
}

export default MegaMenuMobile
