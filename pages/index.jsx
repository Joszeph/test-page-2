import Header from "../src/components/header/Header";
import Example from "../src/components/example/Example";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Time from "../src/components/time/Time";

export default function Index() {


  return (
    <>
      <Header
        left={<User />}
        right={
          <>
            <Weather />
            <Time />
          </>
        }
      />
      <Example />
    </>
  );
}
