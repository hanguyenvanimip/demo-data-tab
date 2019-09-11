import Head from 'next/head';
import React from 'react';


export default class Template extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                    <meta httpEquiv="Content-Language" content="vi" />
                    <meta httpEquiv="X-UA-Compatible" content="requiresActiveX=true" />
                    <meta name="ROBOTS" content="index, follow" />
                    <meta property="og:type" content="website" />
                    <meta property="fb:app_id" content={392568064127522} />
                    <meta name="al:ios:url" property="al:ios:url" content="keeng://" data-app />
                    <meta name="al:ios:app_store_id" property="al:ios:app_store_id" content={631952815} data-app />
                    <meta name="al:ios:app_name" property="al:ios:app_name" content="Keeng" data-app />
                    <meta name="al:android:url" property="al:android:url" content="http://keeng.vn" data-app />
                    <meta name="al:android:package" property="al:android:package" content="com.vttm.keeng" data-app />
                    <meta name="al:android:app_name" property="al:android:app_name" content="keeng" data-app />
                    <link href="https://plus.google.com/103294122996094564415" rel="publisher" />
                    <meta name="author" content="mocha.com.vn" />
                    <meta name="copyright" content="mocha.com.vn" />
                    {/*<meta name="csrf-token" content="MHzysmKLxPiTUi4gdfX8Tdx0Re3sD2nNxOVjXOAa">*/}
                    <title>Mocha video - Mạng xã hội chia sẻ video</title>
                    <link rel="shortcut icon" href="http://video.mocha.com.vn/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:image:width" content={390} />
                    <meta property="og:image:height" content={220} />
                    <meta name="revisit" content="1 days" />
                    <meta name="robots" content="index,follow" />
                    <meta name="googlebot" content="index,follow" />
                    <meta name="slurp" content="index,follow" />
                    <meta name="msnbot" content="index,follow" />
                    <meta name="Facebot" content="index,follow" />

                </Head>

                <div id="wraper">
                    <div id="app">{this.props.children}</div>
                </div>
            </div>
        )
    }

}

