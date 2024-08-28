import { Link } from "react-router-dom"



const Page404 = () => {
  return (
    <div className="main-content-wrapper">
      <div className="wrappers-wrapper-haha centered-page al-center">
        <h1>Page Not Found</h1>
        <p>
          Well, this is awkward…
          <br /><br />
          I think the page you're seeking is off on an adventure!
          <br />
          Let's get you back on track!
        </p>
        <Link className="button submit" to="/">
          Get back on Track
        </Link>
      </div>
    </div>
  )
}

export default Page404;