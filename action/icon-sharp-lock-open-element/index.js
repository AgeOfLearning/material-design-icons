import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLockOpenElement
 * @class IconSharpLockOpenElement
 * @extends {AoflElement}
 */
class IconSharpLockOpenElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLockOpenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-lock-open';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLockOpenElement.is, IconSharpLockOpenElement);

export default IconSharpLockOpenElement;
