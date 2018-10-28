import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSnoozeElement
 * @class IconBaselineSnoozeElement
 * @extends {AoflElement}
 */
class IconBaselineSnoozeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSnoozeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-snooze';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSnoozeElement.is, IconBaselineSnoozeElement);

export default IconBaselineSnoozeElement;
