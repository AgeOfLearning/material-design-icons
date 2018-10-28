import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBorderInnerElement
 * @class IconTwotoneBorderInnerElement
 * @extends {AoflElement}
 */
class IconTwotoneBorderInnerElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBorderInnerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-border-inner';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBorderInnerElement.is, IconTwotoneBorderInnerElement);

export default IconTwotoneBorderInnerElement;
