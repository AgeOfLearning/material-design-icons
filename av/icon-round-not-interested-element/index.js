import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNotInterestedElement
 * @class IconRoundNotInterestedElement
 * @extends {AoflElement}
 */
class IconRoundNotInterestedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNotInterestedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-not-interested';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNotInterestedElement.is, IconRoundNotInterestedElement);

export default IconRoundNotInterestedElement;
