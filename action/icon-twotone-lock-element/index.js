import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLockElement
 * @class IconTwotoneLockElement
 * @extends {AoflElement}
 */
class IconTwotoneLockElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLockElement.is, IconTwotoneLockElement);

export default IconTwotoneLockElement;
