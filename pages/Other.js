import React from 'react';
import Head from 'next/head';
import Template from './Template';
import Link from 'next/link';
import About from '../pages/About';


export default class Other extends React.Component {
    componentDidMount() {
        const axios = require('axios');
        axios({
            method: "get",
            url: 'http://apivideo.mocha.com.vn/onMediaBackendBizVD/mochavideo/listHiddenCategory?limit=4&offset=0&token=',
            proxy: {
                host: '10.61.76.22',
                port: 8888
            },
            auth: {
                username: 'trungdq3',
                password: 'haNOi@2019'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Credentials': true,
                'access-control-expose-headers': "Server, Connection, Access-Control-Allow-Origin, Access-Control-Expose-Headers, Content-Type, Date, Transfer-Encoding, Via",
                'connection': "keep-alive",
                'content-type': "text/plain, application/json; charset=utf-8"
            }
            
        })
            .then(function (response) {
                debugger;
                console.log(response)
                // handle success
                data = response.data;
            });
    }
    static async getInitialProps() {
        // Make a request for a user with a given ID
        var data = {}
        const axios = require('axios');
        await axios({
            method: "get",
            url: 'http://api.haochuan.io/github/users/defunkt',
            proxy: {
                host: '10.61.76.22',
                port: 8888
            },
            auth: {
                username: 'trungdq3',
                password: 'haNOi@2019'
            }
            
        })
            .then(function (response) {
                // handle success
                data = response.data;
            });
        return { data }
    }

    render() {
        let { data } = this.props;
        console.log(this.props.data);
        return (

            <Template>
                <Head>
                    <title>Other page</title>
                    <meta name="description" content="testing react other" />
                    <meta name="keywords" content="react,seo,other" />
                </Head>
                <h1>{data.company}</h1>
                <h1>{data.location}</h1>
                <h1>{data.email}</h1>
                <h1>
                    <Link href="/">
                        <a>Back</a>
                    </Link>
                </h1>
                <h1>
                    <Link href="about">
                        <a>About</a>
                    </Link>
                </h1>

            </Template>
        )
    }
}


