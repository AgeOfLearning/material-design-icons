import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAssignmentIndElement
 * @class IconOutlineAssignmentIndElement
 * @extends {AoflElement}
 */
class IconOutlineAssignmentIndElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAssignmentIndElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-assignment-ind';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAssignmentIndElement.is, IconOutlineAssignmentIndElement);

export default IconOutlineAssignmentIndElement;
