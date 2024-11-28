import { Col, Row } from 'antd';
import './App.css'
import Header from './components/layout/Header';
import MyForm from './components/others/Form';

function App() {

  return (
    <div className='font-montserrat'>
      <Header />

      <Row className='w-3/4 mx-auto my-6 bg-white shadow-xl'>
        <Col className='p-6' span={14}>
          <MyForm />
        </Col>
        <Col className='p-6 bg-rightBg' span={10}>
          This is right
        </Col>
      </Row>

    </div>
  )
}

export default App
