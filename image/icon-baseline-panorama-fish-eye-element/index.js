import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePanoramaFishEyeElement
 * @class IconBaselinePanoramaFishEyeElement
 * @extends {AoflElement}
 */
class IconBaselinePanoramaFishEyeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePanoramaFishEyeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-panorama-fish-eye';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePanoramaFishEyeElement.is, IconBaselinePanoramaFishEyeElement);

export default IconBaselinePanoramaFishEyeElement;
