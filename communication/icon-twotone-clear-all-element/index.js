import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneClearAllElement
 * @class IconTwotoneClearAllElement
 * @extends {AoflElement}
 */
class IconTwotoneClearAllElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneClearAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-clear-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneClearAllElement.is, IconTwotoneClearAllElement);

export default IconTwotoneClearAllElement;
