import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

export default function Feeds(){
    return (
        <>
            <div className="container-fluid">
                <div className="row g-0">
                    <div className="col-md-1">
                        <LeftNav />
                    </div>
                    <div className="col-md-8">
                        <div className="main-feed"></div>
                            
                    </div>

                    <div className="col-md-3">
                        <RightNav />
                    </div>
                </div>
            </div>
        </>
    )
}