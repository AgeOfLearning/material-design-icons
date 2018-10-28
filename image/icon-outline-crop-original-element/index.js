import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCropOriginalElement
 * @class IconOutlineCropOriginalElement
 * @extends {AoflElement}
 */
class IconOutlineCropOriginalElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCropOriginalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-crop-original';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCropOriginalElement.is, IconOutlineCropOriginalElement);

export default IconOutlineCropOriginalElement;
