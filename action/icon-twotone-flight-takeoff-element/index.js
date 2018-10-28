import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFlightTakeoffElement
 * @class IconTwotoneFlightTakeoffElement
 * @extends {AoflElement}
 */
class IconTwotoneFlightTakeoffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFlightTakeoffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-flight-takeoff';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFlightTakeoffElement.is, IconTwotoneFlightTakeoffElement);

export default IconTwotoneFlightTakeoffElement;
