import { useState, useEffect } from "react";
import { Button, Container, Text } from "@nextui-org/react";
import SkeletonLoader from "./components/SkeletonLoader";
import useAxios from "./hooks/useAxios";

function App() {
  const { response, loading, error } = useAxios();
  const [joke, setJoke] = useState(null);

  const fakeLoading = true;

  useEffect(() => {
    if (response) {
      const { id, joke, status } = response;

      if (status !== 200) {
        console.log("something happened");
      }

      setJoke(joke);
    }
  }, [response]);

  return (
    <Container fluid css={{ textAlign: "center" }}>
      <Text weight="hairline">Dad Jokes</Text>
      {fakeLoading ? (
        <SkeletonLoader />
      ) : (
        <Text h2 weight="black">
          {joke}
        </Text>
      )}
      <Button color="gradient" css={{ margin: "2rem auto" }}>
        Random dad joke
      </Button>
    </Container>
  );
}

export default App;
