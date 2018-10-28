import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAlternateEmailElement
 * @class IconSharpAlternateEmailElement
 * @extends {AoflElement}
 */
class IconSharpAlternateEmailElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAlternateEmailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-alternate-email';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAlternateEmailElement.is, IconSharpAlternateEmailElement);

export default IconSharpAlternateEmailElement;
