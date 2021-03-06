import React, { Component } from 'react';
import { Owner } from '../Hit';

export default class Contributors extends Component {
  render() {
    const { contributors } = this.props;
    return (
      <article className="details-side--contributors">
        <h1>{window.i18n.detail.contributors}</h1>
        <ul className="list-unstyled m-2">
          {contributors.map(contributor => (
            <li className="mb-1" key={contributor.name}>
              <Owner {...contributor} />
            </li>
          ))}
        </ul>
      </article>
    );
  }
}
