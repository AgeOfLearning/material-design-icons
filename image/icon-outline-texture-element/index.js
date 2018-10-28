import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTextureElement
 * @class IconOutlineTextureElement
 * @extends {AoflElement}
 */
class IconOutlineTextureElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTextureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-texture';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTextureElement.is, IconOutlineTextureElement);

export default IconOutlineTextureElement;
