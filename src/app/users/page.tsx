import UserTable from "../components/UserTable";
import { getUsers } from "./utils/getUsers";

export default async function Users() {
  const users = await getUsers();
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <UserTable users={users}/>
      </div>
    </section>
  );
}
