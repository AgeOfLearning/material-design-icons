import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBorderVerticalElement
 * @class IconTwotoneBorderVerticalElement
 * @extends {AoflElement}
 */
class IconTwotoneBorderVerticalElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBorderVerticalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-border-vertical';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBorderVerticalElement.is, IconTwotoneBorderVerticalElement);

export default IconTwotoneBorderVerticalElement;
