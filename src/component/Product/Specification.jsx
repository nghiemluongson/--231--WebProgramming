import { Table, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import "./Specification.css";


// const specification = [
//     {name:"Công suất(kW)", value:220},
//     {name:"Mô men xoắn cực đại(Nm)", value:380},
//     {name:"Tăng tốc từ 0 - 100 km/giờ(giây)", value:4.9},
//     {name:"Tốc độ tối đa(km/h)", value:250},
//     {name:"Tiêu thụ nhiên liệu kết hợp (lít/100km)", value:50},
//     {name:"Lượng khí thải CO2 (g/km)", value:5.6},
//     {name:"Giá", value:5000}
// ]

export default function Specification(props){
    return (
        <Row  className='m-3'>
            <h1>Thông số kĩ thuật</h1>
            <Row className='specification'>
                <Col lg='5' className='specification-img'>
                    <img className='w-100' src="https://porsche-vietnam.vn/wp-content/uploads/2018/07/model-718-cayman.png" alt="thông tin xe" />
                </Col>
                <Col lg='6'>
                    <Table striped bordered className='specification-table'>
                        <tbody>
                        {
                            props.specification.map(
                                (object,idx) => (
                                            <tr key={`tr-${idx}`}>
                                                <th>{object.name}</th>
                                                <td>{object.value}</td>
                                            </tr>
                                        )
                            )

                        }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Row>
    );
}