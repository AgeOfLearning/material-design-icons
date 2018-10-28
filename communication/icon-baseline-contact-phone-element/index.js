import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineContactPhoneElement
 * @class IconBaselineContactPhoneElement
 * @extends {AoflElement}
 */
class IconBaselineContactPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineContactPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-contact-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineContactPhoneElement.is, IconBaselineContactPhoneElement);

export default IconBaselineContactPhoneElement;
