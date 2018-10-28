import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAssignmentTurnedInElement
 * @class IconOutlineAssignmentTurnedInElement
 * @extends {AoflElement}
 */
class IconOutlineAssignmentTurnedInElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAssignmentTurnedInElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-assignment-turned-in';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAssignmentTurnedInElement.is, IconOutlineAssignmentTurnedInElement);

export default IconOutlineAssignmentTurnedInElement;
