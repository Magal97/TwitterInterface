import styled, {css} from 'styled-components';
import searchIncon from '../../assets/search.svg';

export const Header = styled.header`
    height: 46px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0, 0.25);
    position: relative;
    z-index: 1;
    
`;


export const ContentHeader = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    height: 100%;
    padding: 0 30px;
    margin: 0 auto;
    

`;

export const Content = styled.div`
    display:flex;
    max-width: 1170px;
    height: 100%;
    padding: 0 30px;
    margin: 0 auto;
    
`;

export const NavHeader = styled.nav`

    ul{
        display:flex;
        list-style: none;
    }

    li{
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #667580;
        font-weight: bold;
        margin-left: 30px;
        
    }

    li:first-child{
        margin-left: 0;
    }

    img{
        margin-right: 7px;
    }
    

`;

export const RightItensHeader = styled.div`
    display: flex;

    img{
        border-radius: 50%;
        height: 34px;
        width: 35px;
        margin: 0 15px;
    }

    button{
        height: 34px;
        background: #3bb9e3;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 14px;
        color: #fff;
        border-radius: 16px;
        width: 90px;
    }

    input{
        width: 220px;
        border: 1px solid #e6ecf0;
        height: 34px;
        padding: 0 30px 0 12px;
        border-radius: 16px;
        font-size: 12px;
        background: #f5f8fa url(${searchIncon}) no-repeat 190px center;
    }

`;


export const Banner = styled.div`
    height: 380px;
    width: 100%;
    background: #3bb9e3;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;


`;

export const Bar = styled.div`
    height: 59px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
`;


export const ContentBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 285px;
    height: 100%;
    width: 100%;

    ul{
        display: flex; 
        height: 100%;

        li{
            
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 15px;
            position: relative;

            span{
                font-weight: bold;
                color: #667580;
                font-size: 12px;
            }

            strong{
                font-weight: bold;
                
                font-size: 18px;
                margin-top: 2px;
            }
        }
    }
`;

export const Active = styled.div`
  
    strong{
        color: #3bb9e3;
    }

    li::after{
            
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #3bb9e3;

    }

    
`;

export const BarActions = styled.div`
    display: flex;
    
    button{
        height: 34px;
        background: #fff;
        
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 14px;
        color: #3bb9e3;
        border: 1px solid #3bb9e3;
        border-radius: 16px;
        width: 90px;
        margin-right: 20px;
    }

`;

export const WrapperContent = styled.div`
    display: flex;
`;

export const AsideProfile = styled.aside`
    
    width: 260px;

    h1{
        font-size: 21px;
        color: #1f2226;
        margin-top: 10px;

    }

    span{
        font-size: 14px;
        color: #53626c;

    }

    p{
        font-size: 14px;
        color: #1f2226;
        margin-top: 15px;
    }

    ul{
        margin-top: 20px;

        li{
            font-size: 14px;
            color: #657786;
            display: flex;
            align-items: center;
            margin-top: 5px;

            img{
                margin-right: 10px;
            }

        }

        li:first-child{
            margin-top: 0;
        }

    }
    
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 200px;
    height: 200px;
    border: 5px solid #fff;
    margin-top: -130px;


`

export const WidgetFollowers = styled.div`
    margin-top: 20px;

    strong{
        font-weight: normal;
        color: #3bb9e3;
        font-size: 14px;
        display: flex;
        align-items: center;

        img{
            margin-right: 5px;
        }

    }
  
    ul{
        display: flex;
        flex-shrink: 0;
        flex-wrap: wrap;
        align-content: flex-start;
        align-items: center;

        li{
            width: 45px;
            height: 45px;
            background: #d0d5d9;
            border-radius: 50%;
            flex-grow:1;
            margin: 0 5px 10px 0;

            
        }
    }

`;

export const WidgetPhotosAndVideos = styled.div`
    margin-top: 20px;

    strong{
        font-weight: normal;
        color: #3bb9e3;
        font-size: 14px;
        display: flex;
        align-items: center;

        img{
            margin-right: 5px;
        }

    }

    ul{
        display: flex;
        flex-shrink: 0;
        flex-wrap: wrap;
        align-content: flex-start;
        align-items: center;

        li{
            width: 80px;
            height: 80px;
            background: #d0d5d9;
            flex-grow:1;
            border-radius: 8px;
            margin: 0 5px 5px 0;

            
        }
    }

`;

export const SectionTimeLine = styled.section`
    flex: 1;
    background: #fff;
    margin: 10px 20px 0;

    nav{
        border-bottom: 1px solid #e6ecf0;
        padding: 10px 15px;

        a{
            color: #3bb9e3;
            font-size: 18px;
            font-weight: bold;
            margin-left: 20px;
        }

        a:first-child{
            margin-left: 0;
            color: #1f2226;
        }
    }

`;

export const Tweets = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;

    li{
        border-bottom: 1px solid #e6ecf0;
        padding: 10px 15px;
        display: flex;

        > img{
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }
    }
`;

export const DivInfoTweets = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;

    strong{
        font-size: 14px;
        color: #1f2326;

        span{
            font-weight: normal;
            font-size: 13px;
            color: #7b8b9a;
        }
    }

    p{
        margin-top: 4px;
    }
   
`;

export const DivActionsTweets = styled.div`
    display: flex;
    margin-top: 20px;

    a{
        display: flex;
        align-items: center;
        color: #667580;
        font-weight: bold;
        font-size: 12px; 
        margin-left: 30px;


        img{
            margin-right: 5px;
            width: 15px;
            height: 15px;
        }
    }

    a:first-child{
        margin-left: 0;
    }
`;  


export const AsideWidgets = styled.aside`
    width: 290px;
    margin-top: 10px;
`;

export const WidgetFollow = styled.div`
    background: #fff;
    padding: 15px;

    ul{
       margin-top: 10px;

       li{
           display: flex;
           justify-content: space-between;
           border-bottom: 1px solid #ccd6dd;
           padding-bottom: 10px;
           margin-bottom: 10px;

           > a{
               color: #222;
               text-decoration: none;
               font-size: 13px;
           }
       }

       
    }
`;

export const TitleFollow = styled.div`
    display: flex;
    align-items: baseline;

    strong{
        font-size: 18px;
        color: #1f2226;

    }

    a{
        color: #3bb9e3;
        font-size: 12px;
        text-decoration: none;
        position: relative;
        padding-left: 10px
    }

    a::before{
        content: '';
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background: #222;
        position: absolute;
        left: 4px;
        top: 6px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }
`;

export const DivInfo = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;

    strong{
        font-size: 14px;
        color: #1f2326;
    }

    span{
        font-weight: normal;
        color: #9a9a9a;
        font-size: 14px;
    }

    button{
        height: 27px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 14px;
        color: #3bb9e3;
        border: 1px solid #3bb9e3;
        border-radius: 16px;
        width: 90px;
        margin-top: 4px;
    }
`;

export const WidgetTrends = styled.div`
    display: flex;
    width: 290px;
    background: #fff;
    margin-top: 10px;
    flex-direction: column;
    padding: 15px;
    

`;

export const TitleTrends = styled.div`
    display: flex;
    align-items: baseline;


    strong{
        font-size: 18px;
        color: #1f2226;
    }

    a{
        color: #3bb9e3;
        font-size: 12px;
        text-decoration: none;
        position: relative;
        padding-left: 10px

    }

    a::before{
        content: '';
        position: absolute;
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background: #222;
        left: 4px;
        top: 6px;
    }

`;

export const ListTrend = styled.div`
    display: flex;
   
    ul{
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        
        li{
            display: flex;
            color: #3bb9e3;
            margin-top: 8px;
           
         
           
        }

        li:first-child{
                margin: 0;
        }

        li:last-child{
        }

        
    }
`;