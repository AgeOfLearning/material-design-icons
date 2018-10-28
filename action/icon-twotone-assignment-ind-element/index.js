import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAssignmentIndElement
 * @class IconTwotoneAssignmentIndElement
 * @extends {AoflElement}
 */
class IconTwotoneAssignmentIndElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAssignmentIndElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-assignment-ind';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAssignmentIndElement.is, IconTwotoneAssignmentIndElement);

export default IconTwotoneAssignmentIndElement;
