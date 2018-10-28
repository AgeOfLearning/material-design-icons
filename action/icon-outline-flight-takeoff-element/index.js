import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFlightTakeoffElement
 * @class IconOutlineFlightTakeoffElement
 * @extends {AoflElement}
 */
class IconOutlineFlightTakeoffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFlightTakeoffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-flight-takeoff';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFlightTakeoffElement.is, IconOutlineFlightTakeoffElement);

export default IconOutlineFlightTakeoffElement;
