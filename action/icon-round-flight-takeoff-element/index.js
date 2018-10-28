import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFlightTakeoffElement
 * @class IconRoundFlightTakeoffElement
 * @extends {AoflElement}
 */
class IconRoundFlightTakeoffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFlightTakeoffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-flight-takeoff';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFlightTakeoffElement.is, IconRoundFlightTakeoffElement);

export default IconRoundFlightTakeoffElement;
