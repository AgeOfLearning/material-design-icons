import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAvTimerElement
 * @class IconBaselineAvTimerElement
 * @extends {AoflElement}
 */
class IconBaselineAvTimerElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAvTimerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-av-timer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAvTimerElement.is, IconBaselineAvTimerElement);

export default IconBaselineAvTimerElement;
