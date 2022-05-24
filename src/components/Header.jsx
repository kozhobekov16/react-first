import logo from '../img/logo-social.png'
const Header = () => {
  let about = 'About'
  return (
    <header>
        <img src={logo} width="200px"/>
        <a href="">{about}</a>
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">Contacts</a>
        <input name="type" type="search" />
      </header>
  )
}

export default Header