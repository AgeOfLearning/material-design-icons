import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCropDinElement
 * @class IconBaselineCropDinElement
 * @extends {AoflElement}
 */
class IconBaselineCropDinElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCropDinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-crop-din';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCropDinElement.is, IconBaselineCropDinElement);

export default IconBaselineCropDinElement;
