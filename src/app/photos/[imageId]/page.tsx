import React from "react";

export interface Props {
  params: {
    imageId: string;
  };
}

const ImageDetail: React.FC<Props> = ({ params }) => {
  return <div>ImageDetail {params.imageId}</div>;
};

export default ImageDetail;
