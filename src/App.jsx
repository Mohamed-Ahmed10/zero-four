import { Col, Row } from 'antd';
import './App.css'
import Header from './components/layout/Header';
import MyForm from './components/others/registrationForm/Form';
import OrderCheckout from './components/others/registrationForm/OrderCheckout';

function App() {

  return (
    <div className='font-montserrat'>
      <Header />

      <Row className='w-3/4 mx-auto my-6 bg-white shadow-xl'>
        <Col className='p-6' lg={14} span={24}>
          <h2 className='text-center text-xl font-bold'>Registration & Booking at GoStudent</h2>
          <h5 className='text-center mb-6 mt-2'>The leading for online tutoring </h5>
          <MyForm />
        </Col>
        <Col className='p-6 bg-rightBg' lg={10} span={24}>
          <OrderCheckout />
        </Col>
      </Row>

    </div>
  )
}

export default App
