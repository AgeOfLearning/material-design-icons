import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCrop54Element
 * @class IconSharpCrop54Element
 * @extends {AoflElement}
 */
class IconSharpCrop54Element extends AoflElement {
  /**
   * Creates an instance of IconSharpCrop54Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-crop-5-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCrop54Element.is, IconSharpCrop54Element);

export default IconSharpCrop54Element;
