import UserTable from "../components/UserTable";
import { getUsers } from "./utils/getUsers";
import { useRouter } from "next/router";

export default async function Users() {
  const users = await getUsers();
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold py-4">Users</h1>
        <UserTable users={users}/>
      </div>
    </section>
  );
}
