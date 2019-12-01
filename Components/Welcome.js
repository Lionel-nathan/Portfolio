import Layout from '../components/Layout';
function Welcome() {
    return (
        <div className="container">
            <Layout>
                <div class="start" id="welcome-section">
                    <div class="container">
                        <div class="row">

                            <div class="col-md-12">
                                <h1 class="woop"> Welcome to our website!</h1>
                            </div>

                            <div class="col-md-8 col-md-offset-2">
                                <h3 class="woop-woop">Below you will find some of me awesome projects that I have created through my journey of learning web development!</h3>
                                <div class="start-btn page-scroll">
                                    <a href="/About" class="btn">HAVE A LOOK!</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Welcome;