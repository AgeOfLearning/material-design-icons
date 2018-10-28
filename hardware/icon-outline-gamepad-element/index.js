import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGamepadElement
 * @class IconOutlineGamepadElement
 * @extends {AoflElement}
 */
class IconOutlineGamepadElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGamepadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-gamepad';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGamepadElement.is, IconOutlineGamepadElement);

export default IconOutlineGamepadElement;
