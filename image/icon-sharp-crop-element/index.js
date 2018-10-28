import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCropElement
 * @class IconSharpCropElement
 * @extends {AoflElement}
 */
class IconSharpCropElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCropElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-crop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCropElement.is, IconSharpCropElement);

export default IconSharpCropElement;
