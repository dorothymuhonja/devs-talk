import LeftNav from "../navigation/LeftNav";
import RightNav from "../navigation/RightNav";
import Post from "./Post";
import Stories from "./Stories";
// import Navbar from "../registration/Navbar";

export default function Feeds(){
    return (
        <>
        
            <div className="container-fluid">                
                <div className="row d-flex justify-content-md-between g-0">
                    <div className="col-md-3">
                        <LeftNav />
                    </div>
                    <div className="col-md-6">
                    <Stories />
                        <div className="main-feed">
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