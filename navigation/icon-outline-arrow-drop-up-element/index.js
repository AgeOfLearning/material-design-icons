import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineArrowDropUpElement
 * @class IconOutlineArrowDropUpElement
 * @extends {AoflElement}
 */
class IconOutlineArrowDropUpElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineArrowDropUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-arrow-drop-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineArrowDropUpElement.is, IconOutlineArrowDropUpElement);

export default IconOutlineArrowDropUpElement;
