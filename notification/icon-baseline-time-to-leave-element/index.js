import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTimeToLeaveElement
 * @class IconBaselineTimeToLeaveElement
 * @extends {AoflElement}
 */
class IconBaselineTimeToLeaveElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTimeToLeaveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-time-to-leave';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTimeToLeaveElement.is, IconBaselineTimeToLeaveElement);

export default IconBaselineTimeToLeaveElement;
