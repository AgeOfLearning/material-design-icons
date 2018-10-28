import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPanoramaFishEyeElement
 * @class IconRoundPanoramaFishEyeElement
 * @extends {AoflElement}
 */
class IconRoundPanoramaFishEyeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPanoramaFishEyeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-panorama-fish-eye';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPanoramaFishEyeElement.is, IconRoundPanoramaFishEyeElement);

export default IconRoundPanoramaFishEyeElement;
