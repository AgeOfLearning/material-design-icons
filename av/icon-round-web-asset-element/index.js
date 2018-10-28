import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWebAssetElement
 * @class IconRoundWebAssetElement
 * @extends {AoflElement}
 */
class IconRoundWebAssetElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWebAssetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-web-asset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWebAssetElement.is, IconRoundWebAssetElement);

export default IconRoundWebAssetElement;
