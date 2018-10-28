import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundScoreElement
 * @class IconRoundScoreElement
 * @extends {AoflElement}
 */
class IconRoundScoreElement extends AoflElement {
  /**
   * Creates an instance of IconRoundScoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-score';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundScoreElement.is, IconRoundScoreElement);

export default IconRoundScoreElement;
