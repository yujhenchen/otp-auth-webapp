import { Button, Label, TextInput } from "flowbite-react";
import { HiMail, HiUser } from "react-icons/hi";

export default function SignUp() {
  function onSubmit() {}
  return (
    <div className="container relative min-h-screen mx-auto text-center">
      <form className="flex flex-col w-full md:w-1/2 xl:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left">
        <div>
          <div>
            <Label htmlFor="name" value="User name" />
          </div>
          <TextInput
            id="name"
            type="text"
            icon={HiUser}
            placeholder="name@flowbite.com"
            required
          />
        </div>

        <div>
          <div>
            <Label htmlFor="email" value="User email" />
          </div>
          <TextInput
            id="email"
            type="email"
            icon={HiMail}
            placeholder="name@flowbite.com"
            required
          />
        </div>

        <div>
          <div>
            <Label htmlFor="password" value="User password" />
          </div>
          <TextInput id="password" type="password" required />
        </div>

        <div>
          <div>
            <Label htmlFor="confirm-password" value="Confirm user password" />
          </div>
          <TextInput id="confirm-password" type="password" required />
        </div>
        <Button type="submit" onSubmit={onSubmit}>
          Sign Up
        </Button>
      </form>
    </div>
  );
}
