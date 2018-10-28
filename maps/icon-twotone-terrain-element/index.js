import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTerrainElement
 * @class IconTwotoneTerrainElement
 * @extends {AoflElement}
 */
class IconTwotoneTerrainElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTerrainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-terrain';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTerrainElement.is, IconTwotoneTerrainElement);

export default IconTwotoneTerrainElement;
