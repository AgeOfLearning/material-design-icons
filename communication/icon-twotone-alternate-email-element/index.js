import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAlternateEmailElement
 * @class IconTwotoneAlternateEmailElement
 * @extends {AoflElement}
 */
class IconTwotoneAlternateEmailElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAlternateEmailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-alternate-email';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAlternateEmailElement.is, IconTwotoneAlternateEmailElement);

export default IconTwotoneAlternateEmailElement;
