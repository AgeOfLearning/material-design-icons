import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCrop32Element
 * @class IconSharpCrop32Element
 * @extends {AoflElement}
 */
class IconSharpCrop32Element extends AoflElement {
  /**
   * Creates an instance of IconSharpCrop32Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-crop-3-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCrop32Element.is, IconSharpCrop32Element);

export default IconSharpCrop32Element;
