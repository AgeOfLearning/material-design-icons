import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalParkingElement
 * @class IconRoundLocalParkingElement
 * @extends {AoflElement}
 */
class IconRoundLocalParkingElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalParkingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-parking';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalParkingElement.is, IconRoundLocalParkingElement);

export default IconRoundLocalParkingElement;
