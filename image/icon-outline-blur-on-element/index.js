import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBlurOnElement
 * @class IconOutlineBlurOnElement
 * @extends {AoflElement}
 */
class IconOutlineBlurOnElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBlurOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-blur-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBlurOnElement.is, IconOutlineBlurOnElement);

export default IconOutlineBlurOnElement;
