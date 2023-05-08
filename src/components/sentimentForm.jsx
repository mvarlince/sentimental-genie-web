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
            ? " no response" 
            : response.choices[0].text }
        </p>
      </div>
    </div>
  );
}

// response.choices[0].text

// HOW COME THIS DOESN'T WORK BC MY THOUGHT PROCESS WAS: IF response[0] DOES NOT EXIST => DO THE REST. but it works without the falsy

  /* <div>
<p> Text sentiment result: { !response[0] 
                                  ? " " 
                                    : console.log(response.choices[0].text) && response.choices[0].text} </p>
</div>
</div> */

