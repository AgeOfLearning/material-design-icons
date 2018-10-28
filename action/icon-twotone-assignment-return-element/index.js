import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAssignmentReturnElement
 * @class IconTwotoneAssignmentReturnElement
 * @extends {AoflElement}
 */
class IconTwotoneAssignmentReturnElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAssignmentReturnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-assignment-return';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAssignmentReturnElement.is, IconTwotoneAssignmentReturnElement);

export default IconTwotoneAssignmentReturnElement;
