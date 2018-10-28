import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFastfoodElement
 * @class IconTwotoneFastfoodElement
 * @extends {AoflElement}
 */
class IconTwotoneFastfoodElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFastfoodElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-fastfood';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFastfoodElement.is, IconTwotoneFastfoodElement);

export default IconTwotoneFastfoodElement;
