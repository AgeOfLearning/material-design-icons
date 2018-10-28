import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAssignmentLateElement
 * @class IconOutlineAssignmentLateElement
 * @extends {AoflElement}
 */
class IconOutlineAssignmentLateElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAssignmentLateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-assignment-late';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAssignmentLateElement.is, IconOutlineAssignmentLateElement);

export default IconOutlineAssignmentLateElement;
