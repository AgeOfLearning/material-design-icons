import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGamepadElement
 * @class IconRoundGamepadElement
 * @extends {AoflElement}
 */
class IconRoundGamepadElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGamepadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-gamepad';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGamepadElement.is, IconRoundGamepadElement);

export default IconRoundGamepadElement;
