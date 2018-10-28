import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePanoramaFishEyeElement
 * @class IconTwotonePanoramaFishEyeElement
 * @extends {AoflElement}
 */
class IconTwotonePanoramaFishEyeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePanoramaFishEyeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-panorama-fish-eye';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePanoramaFishEyeElement.is, IconTwotonePanoramaFishEyeElement);

export default IconTwotonePanoramaFishEyeElement;
