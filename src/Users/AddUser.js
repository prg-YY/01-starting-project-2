import React from "react"
import inputStyles from "../Users/AddUser.module.css"
import Card from "../UI/Card"
import Button from "../UI/Button"

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault()
  }
  return (
    <Card className={inputStyles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="username" type="text" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
