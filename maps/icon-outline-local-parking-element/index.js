import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalParkingElement
 * @class IconOutlineLocalParkingElement
 * @extends {AoflElement}
 */
class IconOutlineLocalParkingElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalParkingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-parking';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalParkingElement.is, IconOutlineLocalParkingElement);

export default IconOutlineLocalParkingElement;
