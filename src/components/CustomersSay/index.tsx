import { FC, HTMLAttributes } from "react";
import { Container, Title, Cards } from "./styles";
import CustomersSayCard from "../CustomersSayCard";
import avatar from "../../assets/profile.svg";


const CustomersSay: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Title>Read Our Reviews 🔥</Title>
      <Cards>
        <CustomersSayCard
          rating={4}
          customerImg={avatar}
          customerName="Alejandro G."
          testimonial="I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!"
        />
        <CustomersSayCard
          rating={5}
          customerImg={avatar}
          customerName="Navita P."
          testimonial="I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!"
        />
        <CustomersSayCard
          rating={4}
          customerImg={avatar}
          customerName="Luis C."
          testimonial="I have been to many restaurants, but this one certainly stood out. The quality of the ingredients and the preparation of the dishes were impeccable. It was an amazing dining experience!"
        />
        <CustomersSayCard
          rating={5}
          customerImg={avatar}
          customerName="Annabel W."
          testimonial="The restaurant has a great variety of dishes and all the ones I tried were excellent. In addition, the price is fair and the service is very attentive. I will definitely recommend it to my friends."
        />
      </Cards>
    </Container>
  );
};

export default CustomersSay;