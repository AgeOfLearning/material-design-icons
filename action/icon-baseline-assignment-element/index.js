import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAssignmentElement
 * @class IconBaselineAssignmentElement
 * @extends {AoflElement}
 */
class IconBaselineAssignmentElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAssignmentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-assignment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAssignmentElement.is, IconBaselineAssignmentElement);

export default IconBaselineAssignmentElement;
