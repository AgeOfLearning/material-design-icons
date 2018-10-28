import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDirectionsElement
 * @class IconRoundDirectionsElement
 * @extends {AoflElement}
 */
class IconRoundDirectionsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDirectionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-directions';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDirectionsElement.is, IconRoundDirectionsElement);

export default IconRoundDirectionsElement;
