import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAssignmentLateElement
 * @class IconTwotoneAssignmentLateElement
 * @extends {AoflElement}
 */
class IconTwotoneAssignmentLateElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAssignmentLateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-assignment-late';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAssignmentLateElement.is, IconTwotoneAssignmentLateElement);

export default IconTwotoneAssignmentLateElement;
