import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalPhoneElement
 * @class IconTwotoneLocalPhoneElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalPhoneElement.is, IconTwotoneLocalPhoneElement);

export default IconTwotoneLocalPhoneElement;
