import { useState, useEffect } from "react";
import { Button, Container, Text } from "@nextui-org/react";
import SkeletonLoader from "./components/SkeletonLoader";
import confetti from "canvas-confetti";
import useAxios from "./hooks/useAxios";

function App() {
  const { response, loading, getAnother } = useAxios();
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

  const doConfetti = () => {
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 60,
    });
  };

  return (
    <Container fluid css={{ textAlign: "center" }}>
      <Text weight="thin" css={{ marginBottom: "3rem" }}>
        Need a dad joke? Generate one below
      </Text>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <Text h2 weight="black">
          {joke}
        </Text>
      )}
      <Button
        color="gradient"
        css={{ margin: "3rem auto 0 auto" }}
        onClick={() => {
          getAnother();
          doConfetti();
        }}
      >
        Random dad joke
      </Button>
    </Container>
  );
}

export default App;
