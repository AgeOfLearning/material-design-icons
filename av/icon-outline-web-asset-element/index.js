import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWebAssetElement
 * @class IconOutlineWebAssetElement
 * @extends {AoflElement}
 */
class IconOutlineWebAssetElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWebAssetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-web-asset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWebAssetElement.is, IconOutlineWebAssetElement);

export default IconOutlineWebAssetElement;
