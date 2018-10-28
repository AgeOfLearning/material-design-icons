import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCropRotateElement
 * @class IconSharpCropRotateElement
 * @extends {AoflElement}
 */
class IconSharpCropRotateElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCropRotateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-crop-rotate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCropRotateElement.is, IconSharpCropRotateElement);

export default IconSharpCropRotateElement;
