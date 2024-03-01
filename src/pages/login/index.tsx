import { AuthPage } from "@refinedev/antd";
import { authCredentials } from "../../providers";
import { Image } from "antd";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      title={<Image src="/issueforgelogo.png" width={130} preview={false} />}
      formProps={{
        initialValues: authCredentials,
      }}
    />
  );
};
