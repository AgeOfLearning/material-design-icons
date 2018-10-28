import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAssignmentReturnedElement
 * @class IconBaselineAssignmentReturnedElement
 * @extends {AoflElement}
 */
class IconBaselineAssignmentReturnedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAssignmentReturnedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-assignment-returned';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAssignmentReturnedElement.is, IconBaselineAssignmentReturnedElement);

export default IconBaselineAssignmentReturnedElement;
