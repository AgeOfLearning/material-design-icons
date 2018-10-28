import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBorderAllElement
 * @class IconTwotoneBorderAllElement
 * @extends {AoflElement}
 */
class IconTwotoneBorderAllElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBorderAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-border-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBorderAllElement.is, IconTwotoneBorderAllElement);

export default IconTwotoneBorderAllElement;
