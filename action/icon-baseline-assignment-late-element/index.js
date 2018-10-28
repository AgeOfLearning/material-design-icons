import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAssignmentLateElement
 * @class IconBaselineAssignmentLateElement
 * @extends {AoflElement}
 */
class IconBaselineAssignmentLateElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAssignmentLateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-assignment-late';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAssignmentLateElement.is, IconBaselineAssignmentLateElement);

export default IconBaselineAssignmentLateElement;
