import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePaletteElement
 * @class IconTwotonePaletteElement
 * @extends {AoflElement}
 */
class IconTwotonePaletteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePaletteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-palette';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePaletteElement.is, IconTwotonePaletteElement);

export default IconTwotonePaletteElement;
