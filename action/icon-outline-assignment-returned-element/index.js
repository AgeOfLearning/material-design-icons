import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAssignmentReturnedElement
 * @class IconOutlineAssignmentReturnedElement
 * @extends {AoflElement}
 */
class IconOutlineAssignmentReturnedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAssignmentReturnedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-assignment-returned';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAssignmentReturnedElement.is, IconOutlineAssignmentReturnedElement);

export default IconOutlineAssignmentReturnedElement;
