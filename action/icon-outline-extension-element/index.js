import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineExtensionElement
 * @class IconOutlineExtensionElement
 * @extends {AoflElement}
 */
class IconOutlineExtensionElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineExtensionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-extension';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineExtensionElement.is, IconOutlineExtensionElement);

export default IconOutlineExtensionElement;
