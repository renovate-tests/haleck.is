import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const SubscribeForm = () => {
  const [email, setEmail] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (event) => {
    setErrorMessage("")
    setSuccessMessage("")

    event.preventDefault()
    addToMailchimp(email)
      .then((data) => {
        if (data.result === "error") {
          setErrorMessage("Something went wrong")
          setSuccessMessage("")
        } else {
          setSuccessMessage("All good, thanks for subscribing!")
          setErrorMessage("")
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value)
  }

  return (
    <form onSubmit={handleSubmit} className={"f"}>
      <h2>Get updates via email</h2>
      <div className="subscribe_container">
        <input
          class="subscribe_input"
          placeholder="Type your email"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <button class="subscribe_button" type="submit">
          Subscribe
        </button>
      </div>
      {successMessage && <h4>{successMessage}</h4>}
      {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
    </form>
  )
}

export default SubscribeForm
