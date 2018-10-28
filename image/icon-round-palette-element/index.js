import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPaletteElement
 * @class IconRoundPaletteElement
 * @extends {AoflElement}
 */
class IconRoundPaletteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPaletteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-palette';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPaletteElement.is, IconRoundPaletteElement);

export default IconRoundPaletteElement;
