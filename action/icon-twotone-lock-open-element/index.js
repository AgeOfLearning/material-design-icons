import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLockOpenElement
 * @class IconTwotoneLockOpenElement
 * @extends {AoflElement}
 */
class IconTwotoneLockOpenElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLockOpenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-lock-open';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLockOpenElement.is, IconTwotoneLockOpenElement);

export default IconTwotoneLockOpenElement;
