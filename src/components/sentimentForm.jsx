import { Button, Input, Form } from "antd";
import { useState } from "react";

export default function SentimentForm() {
  const [response, setResponse] = useState(null);

  const handleSubmit = (userInput) => {
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

  // console.log(response.choices[0].text)

  return (
    <div className="heroContainer ">
      <h1>Welcome to Sentimental Geek</h1>

      <Form onFinish={handleSubmit}>
        <Form.Item label="Enter Text" name="userInput">
          <Input type="text" />
        </Form.Item>
        <Form.Item>
          <Button className="button" type="primary" htmlType="submit">
            Get Sentiment Analysis
          </Button>
        </Form.Item>
      </Form>

      <div>
        <p>
          Text sentiment result:
          {!response
            ? " " 
            : response.choices[0].text }
        </p>
      </div>
    </div>
  );
}

