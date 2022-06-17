import UsersCard from "../UsersCard";
import { User } from "../../types";
import Style from "./UsersRouter.module.css";
import {v4} from "uuid"

interface Props {
  users: User[];
}

export default function UsersRouter({ users }: Props): JSX.Element {
  return (
    <div className={Style.container}>
      {users.map(userData => {
        const { name, userid } = userData;
        return <UsersCard key={v4()} name={name} userid={userid} />;
      })}
    </div>
  );
}
