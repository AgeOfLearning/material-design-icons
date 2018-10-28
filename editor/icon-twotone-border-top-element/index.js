import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBorderTopElement
 * @class IconTwotoneBorderTopElement
 * @extends {AoflElement}
 */
class IconTwotoneBorderTopElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBorderTopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-border-top';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBorderTopElement.is, IconTwotoneBorderTopElement);

export default IconTwotoneBorderTopElement;
