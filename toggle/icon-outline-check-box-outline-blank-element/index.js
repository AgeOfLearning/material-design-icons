import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCheckBoxOutlineBlankElement
 * @class IconOutlineCheckBoxOutlineBlankElement
 * @extends {AoflElement}
 */
class IconOutlineCheckBoxOutlineBlankElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCheckBoxOutlineBlankElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-check-box-outline-blank';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCheckBoxOutlineBlankElement.is, IconOutlineCheckBoxOutlineBlankElement);

export default IconOutlineCheckBoxOutlineBlankElement;
