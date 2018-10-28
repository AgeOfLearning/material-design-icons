import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePaletteElement
 * @class IconBaselinePaletteElement
 * @extends {AoflElement}
 */
class IconBaselinePaletteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePaletteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-palette';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePaletteElement.is, IconBaselinePaletteElement);

export default IconBaselinePaletteElement;
