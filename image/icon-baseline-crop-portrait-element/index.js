import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCropPortraitElement
 * @class IconBaselineCropPortraitElement
 * @extends {AoflElement}
 */
class IconBaselineCropPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCropPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-crop-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCropPortraitElement.is, IconBaselineCropPortraitElement);

export default IconBaselineCropPortraitElement;
