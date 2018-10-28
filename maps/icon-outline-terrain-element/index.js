import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTerrainElement
 * @class IconOutlineTerrainElement
 * @extends {AoflElement}
 */
class IconOutlineTerrainElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTerrainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-terrain';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTerrainElement.is, IconOutlineTerrainElement);

export default IconOutlineTerrainElement;
