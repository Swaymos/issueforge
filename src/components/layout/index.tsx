import { ThemedLayoutV2 } from "@refinedev/antd";
import Header from "./header";
import { Image } from "antd";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={(titleProps) => (
        <Image src="/issueforgelogo.png" width={130} preview={false} />
      )}
    >
      {children}
    </ThemedLayoutV2>
  );
};

export default Layout;
