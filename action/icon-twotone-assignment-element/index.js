import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAssignmentElement
 * @class IconTwotoneAssignmentElement
 * @extends {AoflElement}
 */
class IconTwotoneAssignmentElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAssignmentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-assignment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAssignmentElement.is, IconTwotoneAssignmentElement);

export default IconTwotoneAssignmentElement;
