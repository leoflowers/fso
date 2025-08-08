const Header = ({ name }) => {
  return <h2>{name}</h2>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} info={part} />)}
      <p>
        <b>total of {parts.reduce((acc, current) => acc + current.exercises, 0)} exercices</b>
      </p>
    </div>
  )
}

const Part = ({ info }) => {
  return <p>{info.name} {info.exercises}</p>
}

export default Course
