import { getUserDetail } from "../utils/getUserDetail";
import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Button,
} from "@nextui-org/react";

export default async function UserPage({ params }) {
  const user = await getUserDetail(params.id);
  const bstags = user.company.bs.split(" ");
  const catchPhrase = user.company.catchPhrase.split(" ");
  return (
    <section className="py-36">
      <div className="container flex items-center justify-center mx-auto px-4">
        <Card className="py-4 lg:w-3/4 xl:w-1/2">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src={`https://i.pravatar.cc/150?u=${user.email}`}
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  {user.name} {user.username}
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  {user.email}
                </h5>
              </div>
            </div>
            <Button color="primary" radius="full" size="sm" variant="solid">
              Visit website
            </Button>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p>
              Address: {user.address.street}, {user.address.suite},{" "}
              {user.address.city}, {user.address.zipcode}
            </p>
            <p className="pt-2">Phone: {user.phone}</p>
            <p className="py-2">Company: {user.company.name}</p>
            <ul className="flex gap-3">
              {bstags.map((tag, index) => (
                <li key={index}>#{tag}</li>
              ))}
            </ul>
            <ul className="flex gap-3">
              {catchPhrase.map((tag, index) => (
                <li key={index}>#{tag}</li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
