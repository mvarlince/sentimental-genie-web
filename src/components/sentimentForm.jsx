import { Button, Input, Form } from "antd";
import { useState } from "react";

export default function SentimentForm() {

  const [response, setResponse] = useState('')

  const handleSubmit = ({userInput}) => {
    fetch(`https://sentimental-genie.web.app/sentiment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {userInput} )
    })
      .then((res) => res.json())
      .then(setResponse)
      .catch(console.error);
  };

  console.log(response)

  return (
    <div className="heroContainer ">
      <br />
      <h1>Welcome to Sentimental Geek</h1>

      <br />

      <Form
        onFinish={handleSubmit}
      >
        <Form.Item label="Enter Text" name="Input">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Enter Text" name="Input">
          <Button type="primary" htmlType='submit'> Get Sentiment Analysis </Button>
        </Form.Item>
      </Form>
      <br />
      <div>

      <p> {response} </p>
      </div>
      <br />
      <Button type="primary">Get Analysis</Button>
    </div>
  );
}
