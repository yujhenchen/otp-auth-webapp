import { Button, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import PageContainer from "../../components/page.container";
import { useState } from "react";
import { OTPInput, SlotProps } from "input-otp";

function Slot(props: SlotProps) {
  return (
    <div
    // className={cn(
    //   "relative w-10 h-14 text-[2rem]",
    //   "flex items-center justify-center",
    //   "transition-all duration-300",
    //   "border-border border-y border-r first:border-l first:rounded-l-md last:rounded-r-md",
    //   "group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20",
    //   "outline outline-0 outline-accent-foreground/20",
    //   { "outline-4 outline-accent-foreground": props.isActive }
    // )}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  );
}

// You can emulate a fake textbox caret!
function FakeCaret() {
  return (
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
      <div className="w-px h-8 bg-white" />
    </div>
  );
}

// Inspired by Stripe's MFA input.
function FakeDash() {
  return (
    <div className="flex w-10 justify-center items-center">
      <div className="w-3 h-1 rounded-full bg-border" />
    </div>
  );
}

const UserRole = {
  ADMIN: "admin",
  visitor: "user",
  GUEST: "guest",
} as const;

export type TUserRole = (typeof UserRole)[keyof typeof UserRole];

interface IUser {
  name: string;
  email: string;
  password: string;
  role: TUserRole;
  token: string;
  createdAt: Date;
}

export default function Login() {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string>("");
  const [otp, setOtp] = useState<string>("");

  const signIn = async () => {};
  const verifyOTP = async () => {};

  return (
    <PageContainer>
      <form className="flex flex-col w-full md:w-1/2 xl:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left">
        {!user && !token && (
          <div>
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

            <Button onClick={signIn}>Get OTP</Button>
          </div>
        )}
        {!user && token && (
          <>
            <OTPInput
              maxLength={6}
              containerClassName="group flex items-center has-[:disabled]:opacity-30"
              render={({ slots }) => (
                <>
                  <div className="flex">
                    {slots.slice(0, 3).map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>

                  <FakeDash />

                  <div className="flex">
                    {slots.slice(3).map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>
                </>
              )}
            />
            <Button onClick={verifyOTP}>Confirm</Button>
          </>
        )}
      </form>
    </PageContainer>
  );
}
