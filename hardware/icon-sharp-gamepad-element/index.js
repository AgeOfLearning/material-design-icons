import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGamepadElement
 * @class IconSharpGamepadElement
 * @extends {AoflElement}
 */
class IconSharpGamepadElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGamepadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-gamepad';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGamepadElement.is, IconSharpGamepadElement);

export default IconSharpGamepadElement;
