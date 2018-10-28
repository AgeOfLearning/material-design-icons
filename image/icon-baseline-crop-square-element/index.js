import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCropSquareElement
 * @class IconBaselineCropSquareElement
 * @extends {AoflElement}
 */
class IconBaselineCropSquareElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCropSquareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-crop-square';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCropSquareElement.is, IconBaselineCropSquareElement);

export default IconBaselineCropSquareElement;
