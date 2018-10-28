import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineContactSupportElement
 * @class IconOutlineContactSupportElement
 * @extends {AoflElement}
 */
class IconOutlineContactSupportElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineContactSupportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-contact-support';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineContactSupportElement.is, IconOutlineContactSupportElement);

export default IconOutlineContactSupportElement;
