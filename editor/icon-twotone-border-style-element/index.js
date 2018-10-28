import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBorderStyleElement
 * @class IconTwotoneBorderStyleElement
 * @extends {AoflElement}
 */
class IconTwotoneBorderStyleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBorderStyleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-border-style';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBorderStyleElement.is, IconTwotoneBorderStyleElement);

export default IconTwotoneBorderStyleElement;
