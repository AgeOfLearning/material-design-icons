import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTerrainElement
 * @class IconSharpTerrainElement
 * @extends {AoflElement}
 */
class IconSharpTerrainElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTerrainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-terrain';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTerrainElement.is, IconSharpTerrainElement);

export default IconSharpTerrainElement;
