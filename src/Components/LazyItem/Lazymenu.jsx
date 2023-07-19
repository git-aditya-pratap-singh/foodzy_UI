import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Lazymenu = () => {
  return (
    <div className="w-2/3 m-auto pt-28">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="">
          <Skeleton width={"250px"} height={"25px"} />
          <Skeleton width={"250px"} height={"25px"} />
          <Skeleton width={"250px"} height={"25px"} />
          <Skeleton width={"250px"} height={"25px"} />
        </div>
        <Skeleton width={"250px"} height={"125px"} />
      </div>
      <div className="my-4">
        <Skeleton width={"300px"} height={"35px"} />
      </div>
      <div className="flex justify-between mb-4 flex-col md:flex-row ">
        <div className="">
          <Skeleton width={"300px"} height={"25px"} />
          <Skeleton width={"150px"} height={"25px"} />
        </div>
        <Skeleton width={"120px"} height={"70px"} />
      </div>
      <div className="flex justify-between mb-4 flex-col md:flex-row">
        <div className="">
          <Skeleton width={"300px"} height={"25px"} />
          <Skeleton width={"150px"} height={"25px"} />
        </div>
        <Skeleton width={"120px"} height={"70px"} />
      </div>
    </div>
  )
}
export default Lazymenu;
