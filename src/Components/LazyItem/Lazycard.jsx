import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Lazycard = ()=>{
    return(
        <>
        <div className="flex flex-wrap justify-center items-center gap-5 p-10">
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
    
        </div>
        </>
    )
}

const ShimmerCard =()=>{
    return(
        <>
        <div className="flex flex-col gap-1 m-auto md:m-0">
            <Skeleton width={"250px"} height={"155px"} />
            <Skeleton width={"250px"} height={"25px"} />
            <Skeleton width={"250px"} height={"25px"} />
            <Skeleton width={"250px"} height={"25px"} />
        </div>
        </>
    )
}

export default Lazycard;