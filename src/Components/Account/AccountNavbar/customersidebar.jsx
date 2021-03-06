import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './customersidebar.module.css';

const AccountSidebar = () => {

    const[fbtn, setFbtn] = useState("false");
    const[ubtn, setUbtn] = useState("false");
    const[rbtn, setRbtn] = useState("false");

    const handleFbtn = () => {
        setFbtn(!fbtn);
    }

    const handleUbtn = () => {
        setUbtn(!ubtn);
    }

    const handleRbtn = () => {
        setRbtn(!rbtn);
    }

    return(
        <div className={styles.bodydivside}>
            <div className="col-md-1" id ={styles['dashboardAccount']}>

                <ul>
                    <li> <Link to='/account/dashboard'> <i className="fa fa-server"> &nbsp; Dashboard </i> </Link> </li>
                    <li> <Link to='/account/my-transections'> <i className="fa fa-history"> &nbsp; My Transections </i> </Link> </li>
                    <li> 
                        <a herf="" className="feat-btn" onClick={handleFbtn}>
                            <i className="fa fa-money"> &nbsp; <b>Transfers</b> <span className={fbtn ? "fa fa-caret-down first" : ['fa fa-caret-down first', styles.rotate].join(' ')}> </span> </i> 
                        </a>
                        <ul className={fbtn ? styles.featshow : [styles.featshow, styles.show].join(' ')}>
                            <li>
                                <a href= "#" className="user-btn" onClick={handleUbtn}> 
                                    <i className="fa fa-address-book-o"> &nbsp; <b>My Beneficiaries</b> <span className={ubtn ? "fa fa-caret-down second" : ['fa fa-caret-down second', styles.rotate].join(' ')}> 
                                    </span> </i> 
                                </a> 
                                <ul className={ubtn ? styles.usershow : [styles.usershow, styles.show1].join(' ')}>
                                    <li><Link to='/account/beneficiary/List'><i className="fas fa-exchange-alt"> &nbsp; Transfer Funds </i></Link></li>
                                    <li><Link to='/account/beneficiary/add'><i className="fa fa-user-plus"> &nbsp; Add Beneficiary </i></Link></li>
                                </ul>

                            </li>
                            <li> <Link to='/account/payment'> <i className="fas fa-money-check-alt"> &nbsp; Payments </i> </Link> </li>
                        </ul>
                    </li>
                    <li> 
                        <a href= "#" className="req-btn" onClick={handleRbtn}> 
                            <i className="fas fa-hand-holding-usd"> &nbsp; Loan Request  <span className={rbtn ? "fa fa-caret-down third" : ['fa fa-caret-down third', styles.rotate].join(' ')}>
                            </span></i> 
                        </a>
                        <ul className={rbtn ? styles.reqshow : [styles.reqshow, styles.show3].join(' ')}>
                            <li> <Link to='/account/loan/request'> <i className="fas fa-plus"> &nbsp;Create Loan Request </i> </Link> </li>
                            <li> <Link to='/account/loan/status'> <i className="far fa-check-circle"> &nbsp;<strong>Check Request Status</strong> </i> </Link> </li>
                        </ul> 
                    </li>
                    <li> <Link to='/account/e-statement-download'> <i className="fas fa-file-alt"> &nbsp; E-Statement </i> </Link> </li>
                </ul>
            </div>
        </div>
    );
}
export default AccountSidebar;