import Theme from 'styles/Theme/Teme';
import TaskListPage from '../pages/TasksListPage';
import Container from 'styles/Container/Container';

const App = () => {

  return (
    <Theme>
      <Container>
        <TaskListPage />
      </Container>
    </Theme>
  );
}

export default App;
