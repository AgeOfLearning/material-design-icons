import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCropRotateElement
 * @class IconBaselineCropRotateElement
 * @extends {AoflElement}
 */
class IconBaselineCropRotateElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCropRotateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-crop-rotate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCropRotateElement.is, IconBaselineCropRotateElement);

export default IconBaselineCropRotateElement;
