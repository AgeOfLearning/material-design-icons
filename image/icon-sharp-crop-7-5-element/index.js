import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCrop75Element
 * @class IconSharpCrop75Element
 * @extends {AoflElement}
 */
class IconSharpCrop75Element extends AoflElement {
  /**
   * Creates an instance of IconSharpCrop75Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-crop-7-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCrop75Element.is, IconSharpCrop75Element);

export default IconSharpCrop75Element;
