import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTimerElement
 * @class IconBaselineTimerElement
 * @extends {AoflElement}
 */
class IconBaselineTimerElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTimerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-timer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTimerElement.is, IconBaselineTimerElement);

export default IconBaselineTimerElement;
