import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBallotElement
 * @class IconRoundBallotElement
 * @extends {AoflElement}
 */
class IconRoundBallotElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBallotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-ballot';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBallotElement.is, IconRoundBallotElement);

export default IconRoundBallotElement;
