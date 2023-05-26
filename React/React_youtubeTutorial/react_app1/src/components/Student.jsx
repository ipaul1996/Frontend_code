import Comp  from "./Comp";
import propTypes from 'prop-types'

const Student = ({name, age}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <Comp city="Kolkata"/>
        <Comp city="Mumbai"/>
        <Comp city="Bangalore"/>
    </div>
  )
}

//Defining propTypes
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number
}


Student.defaultProps = {
    name : "Name",
    age : 0
}

export default Student;