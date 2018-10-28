import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLastPageElement
 * @class IconOutlineLastPageElement
 * @extends {AoflElement}
 */
class IconOutlineLastPageElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLastPageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-last-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLastPageElement.is, IconOutlineLastPageElement);

export default IconOutlineLastPageElement;
