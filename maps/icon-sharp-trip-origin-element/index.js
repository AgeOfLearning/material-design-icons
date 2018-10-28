import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTripOriginElement
 * @class IconSharpTripOriginElement
 * @extends {AoflElement}
 */
class IconSharpTripOriginElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTripOriginElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-trip-origin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTripOriginElement.is, IconSharpTripOriginElement);

export default IconSharpTripOriginElement;
