import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTerrainElement
 * @class IconBaselineTerrainElement
 * @extends {AoflElement}
 */
class IconBaselineTerrainElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTerrainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-terrain';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTerrainElement.is, IconBaselineTerrainElement);

export default IconBaselineTerrainElement;
