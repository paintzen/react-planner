import React from 'react';
import PropTypes from 'prop-types';

export default function Floorplan({scene}) {

  let {width, height} = scene;
  let src = 'https://online.visual-paradigm.com/repository/images/e5728e49-09ce-4c95-b83c-482deee24386.png';


  return (<image
            xlinkHref={src}
            x="0"
            y="0"
            width={width}
            height={height}
        />);
}

Floorplan.propTypes = {
  scene: PropTypes.object.isRequired
};
