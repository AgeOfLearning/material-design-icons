import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFlightTakeoffElement
 * @class IconSharpFlightTakeoffElement
 * @extends {AoflElement}
 */
class IconSharpFlightTakeoffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFlightTakeoffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-flight-takeoff';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFlightTakeoffElement.is, IconSharpFlightTakeoffElement);

export default IconSharpFlightTakeoffElement;
