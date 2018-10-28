import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCropSquareElement
 * @class IconSharpCropSquareElement
 * @extends {AoflElement}
 */
class IconSharpCropSquareElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCropSquareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-crop-square';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCropSquareElement.is, IconSharpCropSquareElement);

export default IconSharpCropSquareElement;
