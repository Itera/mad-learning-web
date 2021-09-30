import React from 'react';
import { 
    CutoutBottomLeft,
    CutoutBottomRight,
    CutoutHighBottomLeft,
    CutoutHighBottomRight,
    CutoutHighTopLeft,
    CutoutHighTopRight,
    CutoutTopLeft,
    CutoutTopRight,
    CutoutWideBottomLeft,
    CutoutWideBottomRight,
    CutoutWideTopLeft,
    CutoutWideTopRight
} from './styled';

type CutoutImageProps = {
    mode : string;
}

function CutoutImage({mode} : CutoutImageProps) {
    switch(mode) {
        case 'TopLeft': return (<CutoutTopLeft/>)
        case 'TopRight' : return ( <CutoutTopRight/>)
        case 'BottomLeft' : return (<CutoutBottomLeft/>)
        case 'BottomRight' : return (<CutoutBottomRight/>)
        case 'WideTopLeft': return (<CutoutWideTopLeft/>)
        case 'WideTopRight' : return ( <CutoutWideTopRight/>)
        case 'WideBottomLeft' : return (<CutoutWideBottomLeft/>)
        case 'WideBottomRight' : return (<CutoutWideBottomRight/>)
        case 'HighTopLeft': return (<CutoutHighTopLeft/>)
        case 'HighTopRight' : return ( <CutoutHighTopRight/>)
        case 'HighBottomLeft' : return (<CutoutHighBottomLeft/>)
        case 'HighBottomRight' : return (<CutoutHighBottomRight/>)
        default: return <h3>Failed to place cutoff image</h3>
    }
}

export default CutoutImage;