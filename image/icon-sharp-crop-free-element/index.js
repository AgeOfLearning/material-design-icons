import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCropFreeElement
 * @class IconSharpCropFreeElement
 * @extends {AoflElement}
 */
class IconSharpCropFreeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCropFreeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-crop-free';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCropFreeElement.is, IconSharpCropFreeElement);

export default IconSharpCropFreeElement;
