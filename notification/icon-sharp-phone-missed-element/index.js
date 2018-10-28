import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhoneMissedElement
 * @class IconSharpPhoneMissedElement
 * @extends {AoflElement}
 */
class IconSharpPhoneMissedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhoneMissedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phone-missed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhoneMissedElement.is, IconSharpPhoneMissedElement);

export default IconSharpPhoneMissedElement;
