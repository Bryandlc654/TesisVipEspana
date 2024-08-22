import Card from "./Card"

import {contacts} from "./Cards.use"

function Cards(){


  
  return(

    <ul className="info-contact__group">
            {
                contacts.map((contact, index) => (
                    <Card key={index} name={contact.name} info={contact.info} path={contact.path}/>
                ))
            }                
            </ul>
  )

}

export default Cards;