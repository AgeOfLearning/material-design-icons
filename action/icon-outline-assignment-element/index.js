import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAssignmentElement
 * @class IconOutlineAssignmentElement
 * @extends {AoflElement}
 */
class IconOutlineAssignmentElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAssignmentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-assignment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAssignmentElement.is, IconOutlineAssignmentElement);

export default IconOutlineAssignmentElement;
