import { useState } from "react";
import "@radix-ui/themes/styles.css";
import { Flex, Text, Button } from "@radix-ui/themes";

function App() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
  );
}

export default App;
