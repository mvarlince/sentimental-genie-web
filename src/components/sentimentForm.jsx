import { Button, Input, Form, Spin } from "antd";
import { useState } from "react";

export default function SentimentForm() {

  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (userInput) => {
    setLoading(true)

    await fetch(`https:sentimental-genie.web.app/sentiment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .then(setLoading(false))
      .catch(console.error);
  };

  // console.log(response.choices[0].text)

  return (
    <>
      <main className="container">
        <header className="header">
          <h1>AI Powered Sentimental Analysis</h1>
          <h3>
            A web-based application that uses AI to analyse text sentiment.
            Returns Positive, Negative or Neutral.{" "}
          </h3>
        </header>
        <div className="form">
          <Form onFinish={handleSubmit}>
            <Form.Item label="Enter Text" name="userInput">
              <Input type="text" />
            </Form.Item>
            <Form.Item>
              <Button className="button" type="primary" htmlType="submit">
                Sentiment Analysis
              </Button>
            </Form.Item>
          </Form>
        </div>
        <footer className="footer">
          <p>
            Text sentiment result: 
           { loading && <Spin/>}
            {!response ? " " : response.choices[0].text}
          </p>
        </footer>
      </main>
    </>
  );
}
