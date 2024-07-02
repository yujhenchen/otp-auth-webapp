import { Button, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import PageContainer from "../../components/page.container";

export default function Login() {
  // const errorMessages = () => {};
  const onSubmit = async () => {};

  return (
    <PageContainer>
      <form className="flex flex-col w-full md:w-1/2 xl:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left">
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
    </PageContainer>
  );
}
