import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWebAssetElement
 * @class IconSharpWebAssetElement
 * @extends {AoflElement}
 */
class IconSharpWebAssetElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWebAssetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-web-asset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWebAssetElement.is, IconSharpWebAssetElement);

export default IconSharpWebAssetElement;
