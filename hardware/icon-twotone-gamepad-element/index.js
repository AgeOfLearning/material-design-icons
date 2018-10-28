import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGamepadElement
 * @class IconTwotoneGamepadElement
 * @extends {AoflElement}
 */
class IconTwotoneGamepadElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGamepadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-gamepad';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGamepadElement.is, IconTwotoneGamepadElement);

export default IconTwotoneGamepadElement;
