import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAssignmentTurnedInElement
 * @class IconTwotoneAssignmentTurnedInElement
 * @extends {AoflElement}
 */
class IconTwotoneAssignmentTurnedInElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAssignmentTurnedInElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-assignment-turned-in';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAssignmentTurnedInElement.is, IconTwotoneAssignmentTurnedInElement);

export default IconTwotoneAssignmentTurnedInElement;
