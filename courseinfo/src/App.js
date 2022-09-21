const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part}</p>
    </div>
    )    
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return <p>Number of exercises {props.parts}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts[0]['name'] + ' ' + course.parts[0]['exercises']} />
      <Content parts={course.parts[1]['name'] + ' ' + course.parts[1]['exercises']} />
      <Content parts={course.parts[2]['name'] + ' ' + course.parts[2]['exercises']} />
      <Total parts={course.parts[0]['exercises'] + course.parts[1]['exercises'] + course.parts[2]['exercises']} />
    </div>
  )
}

export default App