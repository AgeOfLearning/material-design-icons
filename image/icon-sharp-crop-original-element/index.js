import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCropOriginalElement
 * @class IconSharpCropOriginalElement
 * @extends {AoflElement}
 */
class IconSharpCropOriginalElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCropOriginalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-crop-original';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCropOriginalElement.is, IconSharpCropOriginalElement);

export default IconSharpCropOriginalElement;
