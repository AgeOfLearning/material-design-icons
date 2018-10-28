import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBorderLeftElement
 * @class IconTwotoneBorderLeftElement
 * @extends {AoflElement}
 */
class IconTwotoneBorderLeftElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBorderLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-border-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBorderLeftElement.is, IconTwotoneBorderLeftElement);

export default IconTwotoneBorderLeftElement;
