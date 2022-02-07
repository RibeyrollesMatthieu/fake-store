import { useAppSelector } from "../redux/app/hooks";

const User = () => {

  const user = useAppSelector(data => data.user.data);

  return (
    <div className="user">
      Firstname: {user.name.firstname} <br />
      Lastname: {user.name.lastname} <br />
      Username: {user.username} <br />
      Email: {user.email} <br />
      City: {user.address?.city} <br />
      Street: {user.address?.street} <br />
      Number: {user.address?.number} <br />
      Zipcode: {user.address?.zipcode} <br />
      Latitude: {user.address?.geolocation?.lat} <br />
      Longitude: {user.address?.geolocation?.long} <br />
      Phone: {user.phone}
    </div>
  )
}

export default User;