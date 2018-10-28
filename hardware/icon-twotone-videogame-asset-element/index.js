import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVideogameAssetElement
 * @class IconTwotoneVideogameAssetElement
 * @extends {AoflElement}
 */
class IconTwotoneVideogameAssetElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVideogameAssetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-videogame-asset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVideogameAssetElement.is, IconTwotoneVideogameAssetElement);

export default IconTwotoneVideogameAssetElement;
