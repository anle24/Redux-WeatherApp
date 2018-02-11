import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

function min(data) {
  return _.round(_.min(data));
}

function max(data) {
  return _.round(_.max(data));
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div className="smalltext">
        min: {min(props.data)}, max: {max(props.data)}, avg: {average(props.data)} ({props.units})
      </div>
    </div>
  )
}
