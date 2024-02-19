import { FC, HTMLAttributes } from "react";
import { Container, Top, Cards } from "./styles";
import Button from "../Button";
import SpecialFoodCard from "../SpecialFoodCard";
import greekSalad from "../../assets/greekSalad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemonDessert.jpg";
// import delivery from "../../assets/scooter-delivery.png";
import delivery2 from "../../assets/delivery.png";


const Specials: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props} id="menu">
      <Top>

        <div className="banner">

          <div className="banner-left">
            <h1>Weekly Specials!</h1>
            <h2>Free Delivery on Orders <span>$25 and up!</span></h2>
            <Button>Online Menu</Button>
          </div>

          <div className="banner-right">
            <img src={delivery2} alt="Restaurant Food" />
          </div>

        </div>


      </Top>
      <div className="review-header"><h1>Weekly Specials!🔥</h1></div>
      <Cards>
        <SpecialFoodCard
          imageUrl={greekSalad}
          title="Greek Salad"
          price={12.99}
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <SpecialFoodCard
          imageUrl={bruchetta}
          title="Bruchetta"
          price={7.99}
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <SpecialFoodCard
          imageUrl={lemonDessert}
          title="Lemon Dessert"
          price={6.99}
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
        <SpecialFoodCard
          imageUrl={greekSalad}
          title="Greek Salad"
          price={12.99}
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
      </Cards>
    </Container>
  );
};

export default Specials;