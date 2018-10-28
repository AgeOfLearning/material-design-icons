import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTimerOffElement
 * @class IconBaselineTimerOffElement
 * @extends {AoflElement}
 */
class IconBaselineTimerOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTimerOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-timer-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTimerOffElement.is, IconBaselineTimerOffElement);

export default IconBaselineTimerOffElement;
