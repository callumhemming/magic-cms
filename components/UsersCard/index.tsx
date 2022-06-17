import { User } from "../../types";
import { Card, Text } from "@nextui-org/react";


interface Props extends User{

}

export default function UsersCard({name, userid}:Props):JSX.Element{

    return(
        <>
        
      <Card isPressable isHoverable variant="bordered">
        <Text h1={true}>{name}</Text>
        <Text h2={true}>{userid}</Text>
      </Card>
    
        </>
    )
}