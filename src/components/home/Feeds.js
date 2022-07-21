import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import Post from "./Post";
import Navbar from "../registration/Navbar";

export default function Feeds(){
    return (
        <>
        <Navbar />
            <div className="container-fluid">
                <div id="story-bar" className="d-flex justify-content-between">
                    <div className="story-style"></div>
                    <div className="story-style"></div>
                    <div className="story-style"></div>
                    <div className="story-style"></div>
                    <div className="story-style"></div>
                    <div className="story-style"></div>
                    <div className="story-style"></div>
                    <div className="story-style"></div>
                    <div className="story-style"></div>
                    <div className="story-style"></div>
                    <div className="story-style"></div>
                    <div className="story-style"></div>
                </div>
                <div className="row d-flex justify-content-md-between">
                    <div className="col-md-1">
                        <LeftNav />
                    </div>
                    <div className="col-md-8">
                        <div className="main-feed">
                            <Post/>
                            <Post/>
                            <Post/>
                            </div>                            
                    </div>
                    <div className="col-md-3">
                        <RightNav />
                    </div>
                </div>
            </div>
        </>
    )
}