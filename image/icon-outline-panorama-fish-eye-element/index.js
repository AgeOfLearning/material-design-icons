import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePanoramaFishEyeElement
 * @class IconOutlinePanoramaFishEyeElement
 * @extends {AoflElement}
 */
class IconOutlinePanoramaFishEyeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePanoramaFishEyeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-panorama-fish-eye';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePanoramaFishEyeElement.is, IconOutlinePanoramaFishEyeElement);

export default IconOutlinePanoramaFishEyeElement;
