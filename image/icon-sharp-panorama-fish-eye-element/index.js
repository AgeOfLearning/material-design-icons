import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPanoramaFishEyeElement
 * @class IconSharpPanoramaFishEyeElement
 * @extends {AoflElement}
 */
class IconSharpPanoramaFishEyeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPanoramaFishEyeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-panorama-fish-eye';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPanoramaFishEyeElement.is, IconSharpPanoramaFishEyeElement);

export default IconSharpPanoramaFishEyeElement;
