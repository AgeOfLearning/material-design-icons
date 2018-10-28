import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWbAutoElement
 * @class IconTwotoneWbAutoElement
 * @extends {AoflElement}
 */
class IconTwotoneWbAutoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWbAutoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-wb-auto';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWbAutoElement.is, IconTwotoneWbAutoElement);

export default IconTwotoneWbAutoElement;
