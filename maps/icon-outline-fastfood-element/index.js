import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFastfoodElement
 * @class IconOutlineFastfoodElement
 * @extends {AoflElement}
 */
class IconOutlineFastfoodElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFastfoodElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-fastfood';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFastfoodElement.is, IconOutlineFastfoodElement);

export default IconOutlineFastfoodElement;
