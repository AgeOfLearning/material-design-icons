import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTerrainElement
 * @class IconRoundTerrainElement
 * @extends {AoflElement}
 */
class IconRoundTerrainElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTerrainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-terrain';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTerrainElement.is, IconRoundTerrainElement);

export default IconRoundTerrainElement;
