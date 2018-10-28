import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAssignmentTurnedInElement
 * @class IconBaselineAssignmentTurnedInElement
 * @extends {AoflElement}
 */
class IconBaselineAssignmentTurnedInElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAssignmentTurnedInElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-assignment-turned-in';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAssignmentTurnedInElement.is, IconBaselineAssignmentTurnedInElement);

export default IconBaselineAssignmentTurnedInElement;
