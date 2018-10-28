import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAssignmentReturnedElement
 * @class IconTwotoneAssignmentReturnedElement
 * @extends {AoflElement}
 */
class IconTwotoneAssignmentReturnedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAssignmentReturnedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-assignment-returned';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAssignmentReturnedElement.is, IconTwotoneAssignmentReturnedElement);

export default IconTwotoneAssignmentReturnedElement;
