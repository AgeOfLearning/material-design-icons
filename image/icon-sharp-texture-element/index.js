import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTextureElement
 * @class IconSharpTextureElement
 * @extends {AoflElement}
 */
class IconSharpTextureElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTextureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-texture';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTextureElement.is, IconSharpTextureElement);

export default IconSharpTextureElement;
