import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWebAssetElement
 * @class IconTwotoneWebAssetElement
 * @extends {AoflElement}
 */
class IconTwotoneWebAssetElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWebAssetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-web-asset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWebAssetElement.is, IconTwotoneWebAssetElement);

export default IconTwotoneWebAssetElement;
