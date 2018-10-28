import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGamepadElement
 * @class IconBaselineGamepadElement
 * @extends {AoflElement}
 */
class IconBaselineGamepadElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGamepadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-gamepad';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGamepadElement.is, IconBaselineGamepadElement);

export default IconBaselineGamepadElement;
