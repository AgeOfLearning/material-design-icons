import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineContactMailElement
 * @class IconOutlineContactMailElement
 * @extends {AoflElement}
 */
class IconOutlineContactMailElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineContactMailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-contact-mail';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineContactMailElement.is, IconOutlineContactMailElement);

export default IconOutlineContactMailElement;
