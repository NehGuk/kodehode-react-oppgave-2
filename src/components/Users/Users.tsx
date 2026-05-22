import { mockData } from "../../data/mockData"
import type { User } from "../../data/mockData"
import { useState } from "react"

export default function Users() {
  const [users, setUsers] = useState<User[] | null>(mockData)

  const handleAddUser = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    if (formData.get("username") !== "" && formData.get("email") !== "") {
      setUsers((prev) => [...(prev ?? []), { username: formData.get("username") as string, email: formData.get("email") as string }])
      e.currentTarget.reset()
    }
  }

  return (
    <section>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <form onSubmit={handleAddUser}>
        <input type="text" name="username" placeholder="username" />
        <input type="text" name="email" placeholder="email" />
        <button type="submit">Add new user</button>
      </form>
    </section>
  )
}
