import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePaletteElement
 * @class IconOutlinePaletteElement
 * @extends {AoflElement}
 */
class IconOutlinePaletteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePaletteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-palette';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePaletteElement.is, IconOutlinePaletteElement);

export default IconOutlinePaletteElement;
