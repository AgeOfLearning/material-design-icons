import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBorderRightElement
 * @class IconTwotoneBorderRightElement
 * @extends {AoflElement}
 */
class IconTwotoneBorderRightElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBorderRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-border-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBorderRightElement.is, IconTwotoneBorderRightElement);

export default IconTwotoneBorderRightElement;
