import { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`
    html, body, #root {
        height: 100%;
        overflow: hidden ;
    }
    #root {
        overflow-y: scroll ;
    }
    ::-webkit-scrollbar {
        display: none; 
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        /* font-size: 100%; */
        /* font: inherit; */
        vertical-align: baseline;
        box-sizing: border-box;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    html, body, input, textarea, keygen, select, button {
        font-family: Microsoft YaHei,Helvetica Neue,Arial,HelveticaNeue,Helvetica,BBAlpha Sans,sans-serif;
    }
    body {
        background: #F7F8FA;
        line-height: 1;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        .adm-dialog-main {
            transform: none !important;
        }
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button {
        user-select: none;
    }
    #root {
        // opacity: .5;
        position: relative;
        z-index: 2;
    }

    @media screen and (min-width: 1024px) {
        html { 
            /* max-width: 750px; */
            margin-left: auto;
            margin-right: auto;
        }
    }

    #nprogress {
    .bar {
        background: #3C99FC !important;
        height: 2px !important;
    }
    .spinner {
        display: none;
        }
    }
    /* 新增全局样式 */
    ${
      '' /* html, body , #root {
        height: 100%;
    } */
    }
    /* button全局 */
    .adm-button.adm-button-large{
        padding: 0.12rem 0.22rem;
        font-size: 16px;
        border-radius: 31px;
    }
    /* 任务详情时间选择居中兼容 */
    .task-time-wrap{
      .adm-picker-view-column-item-label{
        display:flex;
        align-items:center;
        justify-content:center;
      }
      .adm-picker-header-button{
        color: #333333;
        :last-child{
            color: #1385EE;
        }
      }
    }
    /* toast 全局设置居中 */
    .adm-auto-center{
        text-align: center;
    }
    .track-date-picker{
        padding-bottom: 97px !important;
        height:calc(3rem + 97px) !important;
        .adm-picker-header{
            padding: 10px;
            position: relative;
            .adm-picker-header-button{
                position: absolute;
                &:first-child{
                    right: 24px;
                }
                &:last-child{
                    top: 320px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    padding-left: 0px;
                    margin-left: -5px;
                    button{
                        width: 89.8%;
                        height: 48px;
                        background: #3C99FC;
                        border-radius: 31px;
                        font-size: 16px;
                        font-weight: 500;
                        color: #FFFFFF;
                        line-height: 22px;
                    }
                }
            }
            
        }
    }
    .adm-mask{
        height:100vh;
    }
    .popup-box{
        .adm-popup-body{
        transform: none !important;
        }
    }
`;
