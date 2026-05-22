import { mockData } from "../../data/mockData"
import type { User } from "../../data/mockData"
import { useState } from "react"

export default function Users() {
  const [users, setUsers] = useState<User[] | null>(mockData)
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
    </section>
  )
}
