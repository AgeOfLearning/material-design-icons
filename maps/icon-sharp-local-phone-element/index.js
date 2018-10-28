import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalPhoneElement
 * @class IconSharpLocalPhoneElement
 * @extends {AoflElement}
 */
class IconSharpLocalPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalPhoneElement.is, IconSharpLocalPhoneElement);

export default IconSharpLocalPhoneElement;
