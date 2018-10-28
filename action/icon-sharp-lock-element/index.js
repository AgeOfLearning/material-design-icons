import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLockElement
 * @class IconSharpLockElement
 * @extends {AoflElement}
 */
class IconSharpLockElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLockElement.is, IconSharpLockElement);

export default IconSharpLockElement;
