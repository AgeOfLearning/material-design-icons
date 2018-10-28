import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBlurOffElement
 * @class IconOutlineBlurOffElement
 * @extends {AoflElement}
 */
class IconOutlineBlurOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBlurOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-blur-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBlurOffElement.is, IconOutlineBlurOffElement);

export default IconOutlineBlurOffElement;
