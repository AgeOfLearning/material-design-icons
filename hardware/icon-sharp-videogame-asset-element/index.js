import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVideogameAssetElement
 * @class IconSharpVideogameAssetElement
 * @extends {AoflElement}
 */
class IconSharpVideogameAssetElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVideogameAssetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-videogame-asset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVideogameAssetElement.is, IconSharpVideogameAssetElement);

export default IconSharpVideogameAssetElement;
