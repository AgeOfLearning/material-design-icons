import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPaletteElement
 * @class IconSharpPaletteElement
 * @extends {AoflElement}
 */
class IconSharpPaletteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPaletteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-palette';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPaletteElement.is, IconSharpPaletteElement);

export default IconSharpPaletteElement;
