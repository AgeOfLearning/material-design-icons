import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalParkingElement
 * @class IconSharpLocalParkingElement
 * @extends {AoflElement}
 */
class IconSharpLocalParkingElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalParkingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-parking';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalParkingElement.is, IconSharpLocalParkingElement);

export default IconSharpLocalParkingElement;
