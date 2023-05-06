import { Button, Input, Form } from "antd";
import { useState } from "react";

export default function SentimentForm() {
  const [response, setResponse] = useState([]);

  const handleSubmit = (userInput) => {
    console.log(userInput);
    fetch(`https:sentimental-genie.web.app/sentiment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .catch(console.error);
  };

  return (
    <div className="heroContainer ">
      <br />
      <h1>Welcome to Sentimental Geek</h1>
      <br />
      <Form onFinish={handleSubmit}>
        <Form.Item label="Enter Text" name="userInput">
          <Input type="text" />
        </Form.Item>
        <Form.Item>
          <Button className="button" type="primary" htmlType="submit">
            {" "}
            Get Sentiment Analysis{" "}
          </Button>
        </Form.Item>
      </Form>
      <br />
      <div>
        <p> {response.choices[0].text} </p>
      </div>
    </div>
  );
}
