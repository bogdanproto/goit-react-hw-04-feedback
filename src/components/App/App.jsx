import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    ...this.props.options.reduce((acc, item) => {
      acc[item] = 0;
      return acc;
    }, {}),
  };

  onLeaveFeedback = evt => {
    const { id } = evt.currentTarget;
    this.setState(prevState => ({ [id]: prevState[id] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.keys(this.state).reduce(
      (acc, item) => acc + this.state[item],
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const precentPositive = Math.round((this.state.good * 100) / total);
    return precentPositive ? precentPositive : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.props.options}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <h2>Statistics</h2>

        {total ? (
          <Statistics
            stats={this.state}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
