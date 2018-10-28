import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWbAutoElement
 * @class IconSharpWbAutoElement
 * @extends {AoflElement}
 */
class IconSharpWbAutoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWbAutoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-wb-auto';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWbAutoElement.is, IconSharpWbAutoElement);

export default IconSharpWbAutoElement;
