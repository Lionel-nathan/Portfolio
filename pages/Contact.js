import { Component } from 'react';
import Link from 'next/link';
import '../components/Nav';
import Layout from '../components/Layout';




export default class Contact extends Component {

  
    render() {
        return (
            <Layout title="Contact">
                
                <div className="container">
                    <h1 className="brand">Contact Me</h1>
                    <div className="wrapper animated bounceInLeft">
                        <div className="company-info">
                            <p><em><big><strong>Lionel-Nathan Masamba</strong></big></em></p>
                            <ul>
                                <li><i className="fa fa-phone"></i> (+27) 676309121</li>
                                <li><i className="fa fa-envelope"></i> lionelnathanmas@icloud.com</li>
                            </ul>
                        </div>
                        <div className="contact">
                            <h3>Email Me</h3>

                            <form method="POST" action="send">
                                <p>
                                    <label>Name</label>
                                    <input type="text" name="name" />
                                </p>
                                <p>
                                    <label>Company</label>
                                    <input type="text" name="company" />
                                </p>
                                <p>
                                    <label>Email Address</label>
                                    <input type="email" name="email" />
                                </p>
                                <p>
                                    <label>Phone Number</label>
                                    <input type="text" name="phone" />
                                </p>
                                <p className="full">
                                    <label>Message</label>
                                    <textarea name="message" rows="5"></textarea>
                                </p>
                                <p className="full">
                                    <button>Submit</button>
                                </p>
                            </form>

                        </div>
                    </div>
                </div>
                <style jsx>{`
                *{
                    box-sizing: border-box;
                  }
                  
                  body{
                    background:#92bde7;
                    color:#485e74;
                    line-height:1.6;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    padding:1em;
                  }
                  
                  .container{
                    max-width:1170px;
                    margin-left:auto;
                    margin-right:auto;
                    padding:1em;
                  }
                  
                  ul{
                    list-style: none;
                    padding:0;
                  }
                  
                  .brand{
                    text-align: center;
                  }
                  
                  .brand span{
                    color:#fff;
                  }
                  
                  .wrapper{
                    box-shadow: 0 0 20px 0 rgba(72,94,116,0.7);
                  }
                  
                  .wrapper > *{
                    padding: 1em;
                  }
                  
                  .company-info{
                    background:#c9e6ff;
                  }
                  
                  .company-info h3, .company-info ul{
                    text-align: center;
                    margin:0 0 1rem 0;
                  }
                  
                  .contact{
                    background:#f9feff;
                  }
                  
                  /* FORM STYLES */
                  .contact form{
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap:20px;
                  }
                  
                  .contact form label{
                    display:block;
                  }
                  
                  .contact form p{
                    margin:0;
                  }
                  
                  .contact form .full{
                    grid-column: 1 / 3;
                  }
                  
                  .contact form button, .contact form input, .contact form textarea{
                    width:100%;
                    padding:1em;
                    border:1px solid #c9e6ff;
                  }
                  
                  .contact form button{
                    background:#c9e6ff;
                    border:0;
                    text-transform: uppercase;
                  }
                  
                  .contact form button:hover,.contact form button:focus{
                    background:#92bde7;
                    color:#fff;
                    outline:0;
                    transition: background-color 2s ease-out;
                  }
                  
                  /* LARGE SCREENS */
                  @media(min-width:700px){
                    .wrapper{
                      display: grid;
                      grid-template-columns: 1fr 2fr;
                    }
                  
                    .wrapper > *{
                      padding:2em;
                    }
                  
                    .company-info h3, .company-info ul, .brand{
                      text-align: left;
                    }
                  }
        
                 `}
                </style>
            </Layout>
        )
    }
}