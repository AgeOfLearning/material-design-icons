import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVideogameAssetElement
 * @class IconRoundVideogameAssetElement
 * @extends {AoflElement}
 */
class IconRoundVideogameAssetElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVideogameAssetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-videogame-asset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVideogameAssetElement.is, IconRoundVideogameAssetElement);

export default IconRoundVideogameAssetElement;
