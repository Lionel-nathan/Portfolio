

function Send() {


    return (

        <div className="container">
            <form method="POST" action="index">
                <div className="contact">
                    <h1 className="display-3">Thank you for getting in touch!</h1>
                    <big>
                        <p className="lead">I will look over your message and get back to you as soon as possible. In the meantime,
                <strong> please check your email</strong> for further instructions
                </p>

                    </big>

                    <p class="lead">
                        <button className="button" onclick="Send">Continue to homepage</button>
                    </p>
                </div>
            </form>
            <style jsx>
                {`
                .contact{
                    
                  }
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
                .contact form button:hover,.contact form button:focus{
                    background:#92bde7;
                    color:#fff;
                    outline:0;
                    transition: background-color 2s ease-out;
                  }
                .center{
                    margin: auto;
                    width: 50%;
                    border: none;
                    padding: 100px;
                  
                }
                .container{
                    max-width:1170px;
                    margin-left:auto;
                    margin-right:auto;
                    padding:200px;
                  }
                .button {
                    background-color: grey; /* Green */
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    cursor: pointer;
                  }
                
                
                `}
            </style>
        </div>
    )
}


export default Send;