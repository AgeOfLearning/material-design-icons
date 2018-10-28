import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBorderHorizontalElement
 * @class IconTwotoneBorderHorizontalElement
 * @extends {AoflElement}
 */
class IconTwotoneBorderHorizontalElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBorderHorizontalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-border-horizontal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBorderHorizontalElement.is, IconTwotoneBorderHorizontalElement);

export default IconTwotoneBorderHorizontalElement;
