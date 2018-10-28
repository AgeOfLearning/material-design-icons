import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCrop169Element
 * @class IconSharpCrop169Element
 * @extends {AoflElement}
 */
class IconSharpCrop169Element extends AoflElement {
  /**
   * Creates an instance of IconSharpCrop169Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-crop-16-9';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCrop169Element.is, IconSharpCrop169Element);

export default IconSharpCrop169Element;
