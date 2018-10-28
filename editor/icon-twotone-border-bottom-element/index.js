import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBorderBottomElement
 * @class IconTwotoneBorderBottomElement
 * @extends {AoflElement}
 */
class IconTwotoneBorderBottomElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBorderBottomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-border-bottom';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBorderBottomElement.is, IconTwotoneBorderBottomElement);

export default IconTwotoneBorderBottomElement;
