import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import {
  AnalyticsContext,
  AnalyticsListener,
  withAnalytics
} from '../src/index';

class SaveButtonBase extends Component {
  static propTypes = {
    createAnalyticsEvent: PropTypes.func,
  };

  render() {
    return (
      <button onClick={this.handleClick}>Save</button>
    );
  }

  handleClick = () => {
    const analyticsEvt = this.props.createAnalyticsEvent({ action: 'Save' });
    analyticsEvt.fire('Workitem');
  }
}

const SaveButton = withAnalytics()(SaveButtonBase);

export default class App extends Component {
  render() {
    return (
      <AnalyticsListener channel="Workitem" onEvent={this.handleAnalyticsEvent}>
        <AnalyticsContext data={{ oid: 'Workitem:1' }}>
          <AnalyticsContext data={{ room: 'Room:2' }}>
            <SaveButton />
          </AnalyticsContext>
        </AnalyticsContext>
      </AnalyticsListener >
    )
  }

  handleAnalyticsEvent = analyticsEvt => {
    console.log(analyticsEvt.context, analyticsEvt.payload);
  }

}
