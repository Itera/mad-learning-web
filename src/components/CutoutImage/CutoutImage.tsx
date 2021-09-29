import React from 'react';
import { CutoutBottomLeft, CutoutBottomRight, CutoutTopLeft, CutoutTopRight} from './styled';

type CutoutImageProps = {
    mode : string;
}

function CutoutImage({mode} : CutoutImageProps) {
    switch(mode) {
        case 'TopLeft': return (<CutoutTopLeft/>)
        case 'TopRight' : return ( <CutoutTopRight/>)
        case 'BottomLeft' : return (<CutoutBottomLeft/>)
        case 'BottomRight' : return (<CutoutBottomRight/>)
        default: return <h3>Failed to place cutoff image</h3>
    }
}

export default CutoutImage;