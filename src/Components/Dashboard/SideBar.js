import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SiGoogletagmanager } from 'react-icons/si';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineBorderlessTable,AiOutlineUsergroupAdd } from 'react-icons/ai';
import { IoHome } from 'react-icons/io5';
import { userRoleContext } from './DashBoard';

const SideBar = () => {
    const [userRole, setUserRole] = useContext(userRoleContext)
    return (
        <Col md={2} className="bg-info pl-5">
            <Link to="/" className="text-dark" style={{ textDecoration: 'none' }}>
                <h2>
                    <strong><IoHome /></strong>
                </h2>
            </Link>
            <div className="mt-5">
                {
                    userRole === 'admin' ? <>
                        <Link to="/dashBoard/manageOption" className="text-dark" style={{ textDecoration: 'none' }}>
                            <h6>
                                <strong>< SiGoogletagmanager /> MANAGE SITE</strong>
                            </h6>
                        </Link><br />
                        <Link to="/dashBoard/orderList" className="text-dark" style={{ textDecoration: 'none' }}>
                            <h6>
                                <strong> <AiOutlineBorderlessTable /> MANAGE ORDER'S</strong>
                            </h6>
                        </Link><br/>
                        <Link to="/dashBoard/addAdmin" className="text-dark" style={{ textDecoration: 'none' }}>
                            <h6>
                                <strong> <AiOutlineUsergroupAdd /> ADD ADMIN</strong>
                            </h6>
                        </Link>
                    </> : <Link to="/dashBoard/orderList" className="text-dark" style={{ textDecoration: 'none' }}>
                        <h5>
                            <strong>< FaShoppingCart /> MY ORDER'S</strong>
                        </h5>
                    </Link>
                }
            </div>
        </Col>
    );
};

export default SideBar;