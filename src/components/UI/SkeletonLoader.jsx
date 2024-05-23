import "./SkeletonLoader.css";

const SkeletonLoader = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="skeleton skeleton-image"></div>
        </div>
        <div className="col-md-6">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-category"></div>
          <div className="skeleton skeleton-price"></div>
          <div className="skeleton skeleton-description"></div>
          <div className="skeleton skeleton-feature"></div>
          <div className="skeleton skeleton-feature"></div>
          <div className="skeleton skeleton-feature"></div>
          <div className="skeleton skeleton-button"></div>
          <div className="skeleton skeleton-button"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
