import * as Accordion from "@radix-ui/react-accordion";

const Test = () => {
  return (
    <section>
      <h2>Title</h2>
      <Accordion.Root type="single">
        <Accordion.Item value="test-1">
          <Accordion.Header>
            <Accordion.Trigger>
              <p>Test 1</p>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              culpa, harum nesciunt, quis minima aut atque, repellat ut
              inventore est aperiam maiores repellendus unde esse nostrum quia
              explicabo eveniet nihil!
            </p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="test-2">
          <Accordion.Header>
            <Accordion.Trigger>
              <p>Test 2</p>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              culpa, harum nesciunt, quis minima aut atque, repellat ut
              inventore est aperiam maiores repellendus unde esse nostrum quia
              explicabo eveniet nihil!
            </p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
};

export default Test;
