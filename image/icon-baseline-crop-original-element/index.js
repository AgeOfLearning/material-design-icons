import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCropOriginalElement
 * @class IconBaselineCropOriginalElement
 * @extends {AoflElement}
 */
class IconBaselineCropOriginalElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCropOriginalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-crop-original';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCropOriginalElement.is, IconBaselineCropOriginalElement);

export default IconBaselineCropOriginalElement;
