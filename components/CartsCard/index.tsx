import { Cart } from "../../types";
import { Card, Text } from "@nextui-org/react";


interface Props extends Cart{

}

export default function CartCard({totalcost, userid, shoppingcartid}:Props):JSX.Element{

    return(
        <>
        
      <Card isPressable isHoverable variant="bordered">
        <Text h2={true}>{"Total cost in cart: £"+totalcost}</Text>
        <Text h3={true}>{"Users ID: "+userid}</Text>
        <Text h4={true}>{"Shopping Cart ID: "+shoppingcartid}</Text>
      </Card>
    
        </>
    )
}