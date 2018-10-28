import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneContactsElement
 * @class IconTwotoneContactsElement
 * @extends {AoflElement}
 */
class IconTwotoneContactsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneContactsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-contacts';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneContactsElement.is, IconTwotoneContactsElement);

export default IconTwotoneContactsElement;
