import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVideogameAssetElement
 * @class IconBaselineVideogameAssetElement
 * @extends {AoflElement}
 */
class IconBaselineVideogameAssetElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVideogameAssetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-videogame-asset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVideogameAssetElement.is, IconBaselineVideogameAssetElement);

export default IconBaselineVideogameAssetElement;
