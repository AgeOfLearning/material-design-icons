import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAssignmentReturnElement
 * @class IconOutlineAssignmentReturnElement
 * @extends {AoflElement}
 */
class IconOutlineAssignmentReturnElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAssignmentReturnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-assignment-return';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAssignmentReturnElement.is, IconOutlineAssignmentReturnElement);

export default IconOutlineAssignmentReturnElement;
