import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhoneElement
 * @class IconSharpPhoneElement
 * @extends {AoflElement}
 */
class IconSharpPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhoneElement.is, IconSharpPhoneElement);

export default IconSharpPhoneElement;
