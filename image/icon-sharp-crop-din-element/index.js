import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCropDinElement
 * @class IconSharpCropDinElement
 * @extends {AoflElement}
 */
class IconSharpCropDinElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCropDinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-crop-din';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCropDinElement.is, IconSharpCropDinElement);

export default IconSharpCropDinElement;
