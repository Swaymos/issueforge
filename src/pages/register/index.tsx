import { AuthPage } from "@refinedev/antd";
import { Image } from "antd";

export const Register = () => {
  return (
    <AuthPage
      type="register"
      title={<Image src="/issueforgelogo.png" width={130} preview={false} />}
    />
  );
};
