
import React from 'react';
import Link from 'next/link';
import axios, { AxiosRequestConfig } from "axios";
import Head from 'next/head';
import Template from './Template';
import CircularJSON from 'circular-json';
import NoSSR from 'react-no-ssr';
import Loading from '../components/Loading';
import VideoItem from '../components/VideoItem';

export default class Index extends React.Component {

    showData=(videos)=>
    {
        let result = videos.map((video, index) => {
            //if (index <5) {
                return <VideoItem key={index} video={video}/>
            //}
        });

        return result;
    }

    componentDidMount() {
        if (!this.props.isServer) {

            // Promise.all([
            //     getDefunkt(),
            //     getDefunkt(),
            //     getDefunkt(),
            //     getDefunkt(),
            //     getDefunkt(),
            //     getDefunkt(),
            //     getDefunkt(),
            //     getDefunkt(),
            //     getDefunkt()



            // ]).then((response) => {

            //    this.setState({
            //        isLoaded : true,
            //        data:response
            //    })


            //  });
        }

    }

    static async getInitialProps({ req, res }) {
        let myThis = this;
        let isServer = false;
        let isLoaded = false;
        var data = [];
        //var CircularJSON = require('circular-json');
        if (req) {
            isServer = true;
            // await Promise.all([
            //     getDefunkt()               


            // ]).then((response) => {

            //     let resData = JSON.parse(CircularJSON.stringify(response));
            //     data = response.data;
            //     isLoaded = true;
            // });


            await axios({
                method: "get",
                url: 'http://apivideo.mocha.com.vn/onMediaBackendBizVD/mochavideo/listFilmGroups?limit=20&offset=0&lastIdStr=&token=',
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



        }

        


        // await axios({
        //     method: "get",
        //     url: 'http://api.haochuan.io/github/users/defunkt',
        //     proxy: {
        //         host: '10.61.76.22',
        //         port: 8888
        //       },
        //       auth: {
        //         username: 'trungdq3',
        //         password: 'haNOi@2019'
        //     }
        //   })
        // .then(function (response) {
        //     // handle success
        //     data = response.data;
        // });


        // Make a request for a user with a given ID
        // await axios.get('http://localhost:3000/data')
        //     .then(function (response) {
        //         // handle success
        //         data = response.data;
        //     });

        return { data, isLoaded, isServer }
    }

    // componentDidMount() {
    //     var myThis = this;
    //     const axios = require('axios');
    //     var zeit = {};
    //     // Make a request for a user with a given ID
    //     axios.get('https://api.github.com/repos/zeit/next.js')
    //         .then(function (response) {
    //             // handle success
    //             zeit = response.data;
    //             myThis.setState({
    //                 data: response.data
    //             })
    //         });



    // }

    render() {
        //let { data, isLoaded } = this.props.data && this.props.data.length > 0 ? this.props : this.state;
        let data =this.props.data.data.listVideo;
        console.log(data);
        let isLoaded = true;

        let arr1 = [],arr2 = [],arr3 = [],arr4 = [];
        for(let i =0;i<5;i++)
        {
            arr1.push(data[i]);
        }

        for(let i =5;i<10;i++)
        {
            arr2.push(data[i]);
        }
        for(let i =10;i<15;i++)
        {
            arr3.push(data[i]);
        }
        for(let i =15;i<20;i++)
        {
            arr4.push(data[i]);
        }

        console.log(arr1)
        console.log(arr2)
        console.log(arr3)
        console.log(arr4)


        if (!isLoaded)
            return <Loading />
        else {
            return (

                <Template>
                    <Head>
                        <title>My seo app</title>
                        <meta name="description" content="testing react helmet" />
                        <meta name="keywords" content="react,seo,helmet" />
                    </Head>
                    <NoSSR onSSR={<Loading />}>
                        <section>

                        </section>
                    </NoSSR>
                    <div>
                        {/* {this.showData(data)} */}
                    </div>
                    
                    {/* Tao 4 tab:tab1,tab2... */}

                    <h1>
                        <Link href="/other" prefetch>
                            <a>Ather</a>
                        </Link>
                    </h1>
                </Template>
            )
        }




    }
}


function getMojombo() {
    return axios({
        method: "get",
        url: 'http://apivideo.mocha.com.vn/onMediaBackendBizVD/mochavideo/listFilmGroups?limit=20&offset=0&lastIdStr=&token=',
        proxy: {
            host: '10.61.76.22',
            port: 8888
        },
        auth: {
            username: 'trungdq3',
            password: 'haNOi@2019'
        }
    });
}

function getDefunkt() {
    let headers = {
        'content-type': 'application/x-www-form-urlencoded',
        //'Authorization': `${Helper.getTokenParamForUrl()}`
    };
    return axios({
        method: "get",
        url: 'http://apivideo.mocha.com.vn/onMediaBackendBizVD/mochavideo/listFilmGroups?limit=20&offset=0&lastIdStr=&token=',
        proxy: {
            host: '10.61.76.22',
            port: 8888
        }

    });
}







