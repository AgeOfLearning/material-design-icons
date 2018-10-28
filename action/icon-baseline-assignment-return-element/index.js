import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAssignmentReturnElement
 * @class IconBaselineAssignmentReturnElement
 * @extends {AoflElement}
 */
class IconBaselineAssignmentReturnElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAssignmentReturnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-assignment-return';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAssignmentReturnElement.is, IconBaselineAssignmentReturnElement);

export default IconBaselineAssignmentReturnElement;
