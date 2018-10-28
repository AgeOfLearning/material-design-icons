import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLockElement
 * @class IconOutlineLockElement
 * @extends {AoflElement}
 */
class IconOutlineLockElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLockElement.is, IconOutlineLockElement);

export default IconOutlineLockElement;
