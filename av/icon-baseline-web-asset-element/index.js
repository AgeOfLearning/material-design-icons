import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWebAssetElement
 * @class IconBaselineWebAssetElement
 * @extends {AoflElement}
 */
class IconBaselineWebAssetElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWebAssetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-web-asset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWebAssetElement.is, IconBaselineWebAssetElement);

export default IconBaselineWebAssetElement;
