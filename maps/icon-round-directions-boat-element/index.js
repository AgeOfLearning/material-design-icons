import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDirectionsBoatElement
 * @class IconRoundDirectionsBoatElement
 * @extends {AoflElement}
 */
class IconRoundDirectionsBoatElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDirectionsBoatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-directions-boat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDirectionsBoatElement.is, IconRoundDirectionsBoatElement);

export default IconRoundDirectionsBoatElement;
