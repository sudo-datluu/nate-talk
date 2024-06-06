import { User, Tooltip, Link } from "@nextui-org/react";
import { UserData } from "./types/User";
import { EyeIcon, EditIcon, DeleteIcon } from "../components/icons";

export const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "company",
    label: "Company",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

export const renderCell = (user: UserData, columnKey: React.Key) => {
  const cellValue = user[columnKey as keyof UserData];
  switch (columnKey) {
    case "name":
      return (
        <User
          avatarProps={{radius: "lg", src: `https://i.pravatar.cc/150?u=${user.email}`}}
          description={user.email}
          name={user.name}
        >
          {user.email}
        </User>
      );
    case "actions":
      return (
        <div className="relative flex items-center gap-4">
          <Tooltip content="Details" >
        <Link href={`/users/${user.id}`}>
          <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
            <EyeIcon />
          </span>
        </Link>
      </Tooltip>
          <Tooltip content="Edit user">
            <span 
                className="cursor-pointer text-lg text-default-400 active:opacity-50"
            >
              <EditIcon />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete user">
            <span className="cursor-pointer text-lg text-danger active:opacity-50">
              <DeleteIcon />
            </span>
          </Tooltip>
        </div>
      );
    case "company":
        return (
            <span>{user.company.name}</span>
        );
    default:
      return "";
  }
};
