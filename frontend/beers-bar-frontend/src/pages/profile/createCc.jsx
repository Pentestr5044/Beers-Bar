export default function editProfile() {
  return (
    <div>
        <div className="edit-cont">
            <label htmlFor="username-e">please enter your username to change to </label><br/>
            <input id="username-e" type="text" className="username-edit" /><br/>
            <label htmlFor="email-e">please enter your email to change to </label><br/>
            <input id="email-e" type="text" className="email-edit" />

        </div>
    </div>
  )
}
