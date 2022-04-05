import { useState, useEffect } from "react";
import { Button, Container, Text } from "@nextui-org/react";
import SkeletonLoader from "./components/SkeletonLoader";
import useAxios from "./hooks/useAxios";

function App() {
  const { response, loading } = useAxios();
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    if (response) {
      const { joke, status } = response;

      if (status !== 200) {
        console.log("something happened");
      }

      setJoke(joke);
    }
  }, [response]);

  return (
    <Container fluid css={{ textAlign: "center" }}>
      <Text weight="thin">Need a Dad Joke? Generate one below</Text>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <Text
          h2
          weight="black"
          css={{
            margin: "8rem 0",
          }}
        >
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
