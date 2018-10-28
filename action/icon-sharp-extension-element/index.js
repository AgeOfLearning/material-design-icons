import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpExtensionElement
 * @class IconSharpExtensionElement
 * @extends {AoflElement}
 */
class IconSharpExtensionElement extends AoflElement {
  /**
   * Creates an instance of IconSharpExtensionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-extension';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpExtensionElement.is, IconSharpExtensionElement);

export default IconSharpExtensionElement;
