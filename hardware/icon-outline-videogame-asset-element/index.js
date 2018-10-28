import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVideogameAssetElement
 * @class IconOutlineVideogameAssetElement
 * @extends {AoflElement}
 */
class IconOutlineVideogameAssetElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVideogameAssetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-videogame-asset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVideogameAssetElement.is, IconOutlineVideogameAssetElement);

export default IconOutlineVideogameAssetElement;
