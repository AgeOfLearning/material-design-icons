import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneContactSupportElement
 * @class IconTwotoneContactSupportElement
 * @extends {AoflElement}
 */
class IconTwotoneContactSupportElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneContactSupportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-contact-support';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneContactSupportElement.is, IconTwotoneContactSupportElement);

export default IconTwotoneContactSupportElement;
