import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineContactsElement
 * @class IconOutlineContactsElement
 * @extends {AoflElement}
 */
class IconOutlineContactsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineContactsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-contacts';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineContactsElement.is, IconOutlineContactsElement);

export default IconOutlineContactsElement;
