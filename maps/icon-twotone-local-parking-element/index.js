import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalParkingElement
 * @class IconTwotoneLocalParkingElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalParkingElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalParkingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-parking';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalParkingElement.is, IconTwotoneLocalParkingElement);

export default IconTwotoneLocalParkingElement;
