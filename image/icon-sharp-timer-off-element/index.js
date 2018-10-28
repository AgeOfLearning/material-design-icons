import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTimerOffElement
 * @class IconSharpTimerOffElement
 * @extends {AoflElement}
 */
class IconSharpTimerOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTimerOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-timer-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTimerOffElement.is, IconSharpTimerOffElement);

export default IconSharpTimerOffElement;
