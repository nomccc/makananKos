import OpenAI from "openai";
import React, { useState } from "react";

const OpenAi = () => {
  const [command, setCommand] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [image, setImage] = useState("");

  const aiKey = new OpenAI({
    apiKey: `${import.meta.env.VITE_OPENAI_KEY}`,
    dangerouslyAllowBrowser: true
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const response = await aiKey.chat.completions.create({
      messages: [{ role: "system", content: command }],
      model: "gpt-3.5-turbo",
    });
    setResult(response.choices[0].message.content);
    // console.log(result);
    // console.log("response", response);
    setLoading(false)
  };

  const handleGenerateImage = async (e) => {
    e.preventDefault();
    setLoading(true)
    const img = await aiKey.images.generate({ prompt: command });
    console.log(img.data[0].url)
    setImage(img.data[0].url);
    // console.log(result)
    setLoading(false)
  };

  return (
    <div className="w-1/2 mx-auto my-20">
      <h1 className="font-bold text-4xl my-10">
        Tanyakan apapun seputar makanan ke AI!
      </h1>
      <textarea
        className="my-3 p-2 border-2 rounded-xl border-orange-100"
        x
        name="command"
        id="command"
        value={command}
        cols="75"
        rows="5"
        placeholder="Berapa harga cabai saat ini?"
        onChange={(e) => {
          setCommand(e.target.value);
        }}
      ></textarea>
      <div className="">
        <button
          className="mx-2 rounded-lg bg-orange-500 text-white p-3"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit Text
        </button>
        <button
          type="submit"
          className="mx-2 rounded-lg bg-white border-2 border-orange-500  text-orange-500 p-3"
          onClick={(e) => handleGenerateImage(e)}
        >
          Generate Image
        </button>
      </div>
      <div className="my-4">
        <p className="font-bold mt-10 mb-2">Jawaban:</p>
        {loading ? (
          <span className="loading loading-dots loading-lg text-center mx-auto"></span>
        ) : (
          <div>
            <p>{result}</p>
            <img src={image} width={250} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenAi;
