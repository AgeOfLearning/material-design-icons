import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWbAutoElement
 * @class IconOutlineWbAutoElement
 * @extends {AoflElement}
 */
class IconOutlineWbAutoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWbAutoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-wb-auto';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWbAutoElement.is, IconOutlineWbAutoElement);

export default IconOutlineWbAutoElement;
