import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalParkingElement
 * @class IconBaselineLocalParkingElement
 * @extends {AoflElement}
 */
class IconBaselineLocalParkingElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalParkingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-parking';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalParkingElement.is, IconBaselineLocalParkingElement);

export default IconBaselineLocalParkingElement;
