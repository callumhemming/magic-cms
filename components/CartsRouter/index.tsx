import CartsCard from "../CartsCard";
import { Cart } from "../../types";
import Style from "./CartsRouter.module.css";
import {v4} from "uuid"

interface Props {
  carts: Cart[];
}

export default function CartsRouter({ carts }: Props): JSX.Element {
  return (
    <div className={Style.compContainer}>

    <div className={Style.cardsContainer}>
      {carts.map(cartData => {
        const { totalcost, userid, shoppingcartid } = cartData;
        return (
          <CartsCard
          key={v4()}
            totalcost={totalcost}
            userid={userid}
            shoppingcartid={shoppingcartid}
          />
        );
      })}
    </div>
    </div>
  );
}
