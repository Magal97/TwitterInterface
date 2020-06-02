import React from 'react';


import homeHeader from '../../assets/home.svg';
import notificationHeader from '../../assets/notification.svg';
import messageHeader from '../../assets/message.svg';
import logoHeader from '../../assets/logo.svg';
import avatarHeader from '../../assets/avatar.png';
import moreButton from '../../assets/more.svg';
import placeIcon from '../../assets/place.svg';
import urlIcon from '../../assets/url.svg';
import joinedIcon from '../../assets/joined.svg';
import bornIcon from '../../assets/born.svg';
import avatarImage from '../../assets/avatar.png';
import followersIcon from '../../assets/followers.svg';
import imagesIcon from '../../assets/images.svg';
import commentsIcon from '../../assets/comments.svg';
import retweetIcon from '../../assets/retweet.svg';
import likeIcon from '../../assets/like.svg';


import {Header, ContentHeader, NavHeader, RightItensHeader, Banner, 
Bar, BarActions, ContentBar, Content, Active, WrapperContent, AsideProfile,
SectionTimeLine, AsideWidgets, Avatar, WidgetFollowers, WidgetPhotosAndVideos,
WidgetFollow, TitleFollow, Profile, DivInfo, Tweets, DivInfoTweets, DivActionsTweets,
WidgetTrends, TitleTrends, ListTrend } from './styles';


const Main: React.FC = () => {

    return(
        <>
            <Header>
                <ContentHeader>
                <NavHeader>
                    <ul>
                        <li><img src={homeHeader}/>Home</li>
                        <li><img src={notificationHeader}/>Notifications</li>
                        <li><img src={messageHeader}/>Messages</li>
                    </ul>
                </NavHeader>
                    <img src={logoHeader} />
                <RightItensHeader>
                    <input placeholder="Search on Twitter"></input>
                    <img src={avatarHeader} />
                    <button>Tweet</button>
                </RightItensHeader>
                </ContentHeader>
            </Header>
            
            <Banner>
                <h1>Twitter do Magal</h1>
            </Banner>

            <Bar>
            <Content>

                <ContentBar>
                    <ul>
                        <Active>
                        <li>
                            <span>Tweets</span>
                            <strong>1234</strong>
                        </li>
                        </Active>
                        <li>
                            <span>Followings</span>
                            <strong>547</strong>
                        </li>
                        <li>
                            <span>Followers</span>
                            <strong>387</strong>
                        </li>
                        <li>
                            <span>Favorites</span>
                            <strong>265</strong>
                        </li>
                        <li>
                            <span>Lists</span>
                            <strong>8</strong>
                        </li>
                        <li>
                            <span>Moments</span>
                            <strong>0</strong>
                        </li>
                    </ul>
                    <BarActions>
                        <button>Follow</button>
                        <img src={moreButton} />
                    </BarActions>
                </ContentBar>
            </Content>
            </Bar>
            <Content>

            <WrapperContent>
                <AsideProfile>
                    <Avatar src={avatarImage}/>
                    <h1>Matheus Magalhães</h1>
                    <span>@magalsz</span>
                    <p>Web Developer, Mobile Developer, API Developer and Technology enthusiast.</p>

                    <ul>
                        <li>
                            <img src={placeIcon}/> Barueri, Brasil
                        </li>
                        <li>
                           <img src={urlIcon}/> www.magalDev.com
                        </li>
                        <li>
                           <img src={joinedIcon}/> Entrou em Julho de 2018
                        </li>
                        <li>
                           <img src={bornIcon}/> 09/10/2001
                        </li>
                    </ul>
                 
                    <WidgetFollowers>
                        <strong><img src={followersIcon} />73 followers that you know</strong>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </WidgetFollowers>

                    <WidgetPhotosAndVideos>
                        <strong><img src={imagesIcon} />266 photos and videos</strong>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </WidgetPhotosAndVideos>
                    
                </AsideProfile>
            </WrapperContent>
                    
                <SectionTimeLine>
                    <nav>
                        <a>Tweets</a>
                        <a>Tweets and replies</a>
                        <a>Medias</a>
                    </nav>
                    <Tweets>
                        <li>
                            <img src={avatarImage}></img>
                            <DivInfoTweets>
                                <strong>Magal <span>magal_sz</span></strong>
                                <p>#blacklivesmatter</p>
                                <DivActionsTweets>
                                    <a><img src={commentsIcon}/>3</a>
                                    <a><img src={retweetIcon}/>3</a>
                                    <a><img src={likeIcon}/>5</a>
                              </DivActionsTweets>
                            </DivInfoTweets>
                         
                        </li>
                        <li>
                            <img src={avatarImage}></img>
                            <DivInfoTweets>
                                <strong>Magal <span>magal_sz</span></strong>
                                <p>#blacklivesmatter</p>
                                <DivActionsTweets>
                                    <a><img src={commentsIcon}/>3</a>
                                    <a><img src={retweetIcon}/>3</a>
                                    <a><img src={likeIcon}/>5</a>
                              </DivActionsTweets>
                            </DivInfoTweets>
                         
                        </li>
                        <li>
                            <img src={avatarImage}></img>
                            <DivInfoTweets>
                                <strong>Magal <span>magal_sz</span></strong>
                                <p>#blacklivesmatter</p>
                                <DivActionsTweets>
                                    <a><img src={commentsIcon}/>3</a>
                                    <a><img src={retweetIcon}/>3</a>
                                    <a><img src={likeIcon}/>5</a>
                              </DivActionsTweets>
                            </DivInfoTweets>
                         
                        </li>
                        <li>
                            <img src={avatarImage}></img>
                            <DivInfoTweets>
                                <strong>Magal <span>magal_sz</span></strong>
                                <p>#blacklivesmatter</p>
                                <DivActionsTweets>
                                    <a><img src={commentsIcon}/>3</a>
                                    <a><img src={retweetIcon}/>3</a>
                                    <a><img src={likeIcon}/>5</a>
                              </DivActionsTweets>
                            </DivInfoTweets>
                         
                        </li>
                        <li>
                            <img src={avatarImage}></img>
                            <DivInfoTweets>
                                <strong>Magal <span>magal_sz</span></strong>
                                <p>#blacklivesmatter</p>
                                <DivActionsTweets>
                                    <a><img src={commentsIcon}/>3</a>
                                    <a><img src={retweetIcon}/>3</a>
                                    <a><img src={likeIcon}/>5</a>
                              </DivActionsTweets>
                            </DivInfoTweets>
                         
                        </li>
                        <li>
                            <img src={avatarImage}></img>
                            <DivInfoTweets>
                                <strong>Magal <span>magal_sz</span></strong>
                                <p>#blacklivesmatter</p>
                                <DivActionsTweets>
                                    <a><img src={commentsIcon}/>3</a>
                                    <a><img src={retweetIcon}/>3</a>
                                    <a><img src={likeIcon}/>5</a>
                              </DivActionsTweets>
                            </DivInfoTweets>
                         
                        </li>
                    </Tweets>
                </SectionTimeLine>

                <AsideWidgets>
                    <WidgetFollow>
                        <TitleFollow>
                            <strong>Who to follow</strong>
                            <a href="">Refresh</a>
                            <a href="">View all</a>
                        </TitleFollow>
                        <ul>
                            <li>
                                <Profile>
                                    <img src={avatarImage} />
                                    <DivInfo>
                                        <strong>Spade <span>@sapde_be</span></strong>
                                        <button>Follow</button>
                                    </DivInfo>
                                </Profile>
                                <a href="" >X</a>
                            </li>
                            <li>
                                <Profile>
                                    <img src={avatarImage} />
                                    <DivInfo>
                                        <strong>Spade <span>@sapde_be</span></strong>
                                        <button>Follow</button>
                                    </DivInfo>
                                </Profile>
                                <a href="" >X</a>
                            </li>
                            <li>
                                <Profile>
                                    <img src={avatarImage} />
                                    <DivInfo>
                                        <strong>Spade <span>@sapde_be</span></strong>
                                        <button>Follow</button>
                                    </DivInfo>
                                </Profile>
                                <a href="" >X</a>
                            </li>
                        </ul>
                    </WidgetFollow>
                    <WidgetTrends>
                         <TitleTrends>
                            <strong>Trends</strong>
                            <a href="">Change</a>
                        </TitleTrends>
                        <ListTrend>
                            <ul>
                                <li>#BlackLivesMetter</li>
                                <li>#BlackLivesMetter</li>
                                <li>#BlackLivesMetter</li>
                                <li>#BlackLivesMetter</li>
                                <li>#BlackLivesMetter</li>
                            </ul>
                        </ListTrend>
                    </WidgetTrends>
                </AsideWidgets>
            </Content>
            
        </>
    );

};


export default Main;