import { Button, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";

export default function Login() {
  // const errorMessages = () => {};
  const onSubmit = async () => {};

  return (
    <div>
      <form>
        <div>
          <div>
            <Label htmlFor="email" value="Your email" />
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

        <Button type="submit" onSubmit={onSubmit}>
          Sign In
        </Button>
      </form>
    </div>
  );
}
