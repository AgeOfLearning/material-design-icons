import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTextureElement
 * @class IconTwotoneTextureElement
 * @extends {AoflElement}
 */
class IconTwotoneTextureElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTextureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-texture';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTextureElement.is, IconTwotoneTextureElement);

export default IconTwotoneTextureElement;
