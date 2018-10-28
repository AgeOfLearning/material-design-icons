import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFlightElement
 * @class IconOutlineFlightElement
 * @extends {AoflElement}
 */
class IconOutlineFlightElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFlightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-flight';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFlightElement.is, IconOutlineFlightElement);

export default IconOutlineFlightElement;
