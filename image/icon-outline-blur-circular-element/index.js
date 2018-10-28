import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBlurCircularElement
 * @class IconOutlineBlurCircularElement
 * @extends {AoflElement}
 */
class IconOutlineBlurCircularElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBlurCircularElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-blur-circular';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBlurCircularElement.is, IconOutlineBlurCircularElement);

export default IconOutlineBlurCircularElement;
