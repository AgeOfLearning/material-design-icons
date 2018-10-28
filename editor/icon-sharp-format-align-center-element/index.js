import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatAlignCenterElement
 * @class IconSharpFormatAlignCenterElement
 * @extends {AoflElement}
 */
class IconSharpFormatAlignCenterElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatAlignCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-align-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatAlignCenterElement.is, IconSharpFormatAlignCenterElement);

export default IconSharpFormatAlignCenterElement;
