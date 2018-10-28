import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFlightElement
 * @class IconSharpFlightElement
 * @extends {AoflElement}
 */
class IconSharpFlightElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFlightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-flight';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFlightElement.is, IconSharpFlightElement);

export default IconSharpFlightElement;
