import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAssignmentIndElement
 * @class IconBaselineAssignmentIndElement
 * @extends {AoflElement}
 */
class IconBaselineAssignmentIndElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAssignmentIndElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-assignment-ind';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAssignmentIndElement.is, IconBaselineAssignmentIndElement);

export default IconBaselineAssignmentIndElement;
