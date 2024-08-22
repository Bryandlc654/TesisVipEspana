import Card from "./Card"
import { services } from "./Cards.use"

function Cards () {
  
  return (
    <div className="page-services__container">
                {services.map((service) => (
                    <Card 
                        key={service.id}
                        number={service.id}
                        title={service.title}
                        description={service.description}
                        link={service.link}
                    />
                ))}

                
            </div>
  )
}

export default Cards